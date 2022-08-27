import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import {
  Linking,
  Platform,
  ToastAndroid, AlertIOS,Alert,
} from "react-native";
// export  const BASE_URL ='http://152.228.142.80:4000/api/riders/'; server
// export  const ENDPOINT_SOCKET ='http://192.168.100.103:4000'; Sid Maison
// export  const BASE_URL ='http://192.168.0.23:4000/api/riders/';// Boouba
export  const ENDPOINT_SOCKET ='https://sevir.ovh';// remote ssl
export  const BASE_URL ='https://sevir.ovh/api/drivers/';// remote ssl
// export  const ENDPOINT_SOCKET ='http://152.2@8.142.80:4000';// remote
// export  const BASE_URL ='http://152.228.142.80:4000/api/riders/';// remote
// export  const ENDPOINT_SOCKET ='http://192.168.100.101:4000';// local
// export  const BASE_URL ='http://192.168.100.101:4000/api/drivers/';// local
export const EURO = '€';
export const ADDRESSES = 'addresses';
export const FIREBASE_TOKEN = 'firebaseToken';
export const COMFORT = 'COMFORT';
export const ECONOMY = 'ECONOMY';
export const TRICYCLE = 'TRICYCLE';
export const PRIX_KM = 250;
export const PRIX_DE_BASE_COMFORT = 600;
export const PRIX_DE_BASE_ECONOMY = 300;
export const PRIX_DE_BASE_TRICYCLE = 150;
export const DEVISE = ' CFA';
export const WALLET_HISTORY = 'Wallet Transaction History';
export const WALLET_BALANCE = 'Wallet Balance';
export const PAY_WITH_CHANGE = 'PAY_WITH_CHANGE';
export const CONTACT_DETAILS = 'Contact details';
export const PHONE = 'Phone';
export const EMAIL = 'Email';
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
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
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
const onPressCall = ()=> {
	const url = 'telprompt:5551231234';
	Linking.canOpenURL(url)
		.then((supported) => {
			if (!supported) {
				console.error('Can\'t handle url: ' + url);
			} else {
				return Linking.openURL(url)
					.then((data) => console.error("then", data))
					.catch((err) => { throw err; });
			}
		})
		.catch((err) => console.error('An error occurred', err));
}
export const makeCall = (phoneNumber) => {
  let localPhoneNumber = '';
  // phoneNumber = '+33'+phoneNumber
  // if (Platform.OS === 'android') {
  //   localPhoneNumber = `tel:${phoneNumber}`;
  // } else {
  //   localPhoneNumber = `telprompt:${phoneNumber}`;
  // }
  localPhoneNumber = `tel:${phoneNumber}`;
  // Linking.openURL(localPhoneNumber);
  Linking.canOpenURL(localPhoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert(localPhoneNumber+' Phone number is not available');
    } else {
      return Linking.openURL(localPhoneNumber);
    }
  })
  .catch(err => console.log(err));
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
    } else if (typeVehicule === ECONOMY) {
      let veh = vehicleTypes?.find(element => element.name === ECONOMY);
      total = roundTo50(
        veh?.baseFare + nbKm * veh?.distanceRatePerKm,
        );
      selectedCar = ECONOMY;
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