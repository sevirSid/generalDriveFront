import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import {
  Linking,
  Platform,
  ToastAndroid, AlertIOS, Dimensions,
} from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const declancheNotification=(title,message)=>{
    configure();
    creerCanal("1");
    notification("1",title,message);
  };
  const notification = (channel,judul,pesan) => {
    PushNotification.localNotificationSchedule({
        channelId:channel,
        message: pesan, // (required)
        date: new Date(Date.now() + (5 * 1000)), // in 60 secs
        title:judul,
      });
}
const creerCanal = (channel) => {
    PushNotification.createChannel(
        {
          channelId: channel, // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorize your notifications", // (optional) default: undefined.
          playSound: true, // (optional) default: true
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: 4, // (optional) default: 4. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => 
          {}
        );
}
export const dateString = (dateeee) => {
  if(dateeee && dateeee !== NaN){
    const date = new Date(dateeee)
    const res = ("0" + date.getDate()).slice(-2) + "/" +
      ("0" + (date.getMonth()+1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("0" + date.getHours()).slice(-2) + ":" +
      ("0" + date.getMinutes()).slice(-2) 
      // + ":" +
      // ("0" + date.getSeconds()).slice(-2);
      return res;
  }
}
const configure = () => {
    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
        },
        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: function (notification) {
          // process the notification
          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }, 
        // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        onAction: function (notification) {
          // process the action
        },
        // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
        onRegistrationError: function(err) {
        },
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
        requestPermissions: Platform.OS === 'ios'
      });
}
/**
 * 
 * @param {the previous position of the driver} previousDriverPosition 
 * @param {the previous position of the driver} driverCurrentPosition 
 * @returns the heading of vehicle based on previous and surrent position.
 */
export const  _bearing = (previousDriverPosition, driverCurrentPosition) => {
  if(previousDriverPosition && driverCurrentPosition){
    const lat1 = previousDriverPosition.latitude;
    const lng1 = previousDriverPosition.longitude;
    const lat2 = driverCurrentPosition.latitude;
    const lng2 = driverCurrentPosition.longitude;
    const dLon = (lng2 - lng1);
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(
    dLon
    );
    const _toDeg = (rad) => {
      const degre = rad * 180 / Math.PI;
      return degre;
      }
    const brng = _toDeg(Math.atan2(y, x));
    return 360 - ((brng + 360) % 360);
  }
}
export const makeCall = (phoneNumber) => {
  let localPhoneNumber = '';
  if (Platform.OS === 'android') {
    localPhoneNumber = 'tel:${'+phoneNumber+'}';
  } else {
    localPhoneNumber = 'telprompt:${'+phoneNumber+'}';
  }
  Linking.openURL(localPhoneNumber);
};
export const makeSms = (phoneNumber) => {
  let localPhoneNumber = '';
  if (Platform.OS === 'android') {
    localPhoneNumber = 'sms:'+phoneNumber;
  } else {
    localPhoneNumber = 'smsprompt:'+phoneNumber;
  }
  Linking.openURL(localPhoneNumber);
};
export const makeEmail = (phoneNumber) => {
  let localEmail = '';
  if (Platform.OS === 'android') {
    localEmail = 'tel:${'+phoneNumber+'}';
  } else {
    localEmail = 'telprompt:${'+phoneNumber+'}';
  }
  Linking.openURL('mailto:${'+email+'}');
};
export   const notifyMessage = (msg) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.LONG, ToastAndroid.TOP);
  } else {
    AlertIOS.alert(msg);
  }
}
export const calculPrice = (typeVehicule, nbKm, vehicleTypes) => {
  let total = 0;
  let selectedCar = null;
  nbKm = nbKm ? nbKm: 0;
  if (nbKm || nbKm === 0) {
    if (typeVehicule === COMFORT) {
      let veh = vehicleTypes?.find(element => element.name === COMFORT);
      total =
        roundTo50(
          veh?.baseFare + nbKm * veh?.distanceRatePerKm,
        )
      selectedCar = COMFORT;
    } else if (typeVehicule === ECONOMIC) {
      let veh = vehicleTypes?.find(element => element.name === ECONOMIC);
      total = roundTo50(
        veh?.baseFare + nbKm * veh?.distanceRatePerKm,
        );
      selectedCar = ECONOMIC;
    } else {
      let veh = vehicleTypes?.find(element => element.name === TRICYCLE);
      total = roundTo50(
        veh?.baseFare + nbKm * veh?.distanceRatePerKm,
        );
      selectedCar = TRICYCLE;
    }
  } 
  else if(openRidePrice){
    total = openRidePrice;
  }
  return {total, selectedCar};
};
const roundTo50 = (num) => {
  return Math.round(num / 50) * 50;
};