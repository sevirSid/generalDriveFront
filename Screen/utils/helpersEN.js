import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
  //  Generates number of random geolocation points given a center and a radius.
  export const getOneTimeLocation = async (isMounted) => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude = position.coords.longitude;
        //getting the Latitude from the location json
        const currentLatitude = position.coords.latitude;
        if (isMounted) {
          //Setting Longitude state
          setCurrentLongitude(currentLongitude);
          //Setting Longitude state
          setCurrentLatitude(currentLatitude);
          let lastPosition = {lastPositionLat: currentLatitude, lastPositionLng: currentLongitude};
          AsyncStorage.setItem('lastPosition', JSON.stringify()).catch((e) => {}
          );
          AsyncStorage.setItem('lastPositionLng', currentLongitude.toString()).catch((e) => {}
          );
          let placeTMP = Object.assign({}, currentPlace);
          placeTMP.geometry.location.lat = currentLatitude;
          placeTMP.geometry.location.lng = currentLongitude;
          setCurrentPlace(placeTMP);
        }
      },
      (error) => {
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  export const saveObjectToAsyncStorage = async (key, value)=>{
    AsyncStorage.setItem(key, JSON.stringify(value)).catch((e) => {}
    );
  }
  export const getObjectFromAsyncStorage = async (key)=>{
    let res = null;
    await AsyncStorage.getItem(key).then(val => {
      res = JSON.parse(val);
    });
    return res;
  }
  const generateRandomPoint = (center, radius)=>{
    var x0 = center.longitude;
    var y0 = center.latitude;
    // Convert Radius from meters to degrees.
    var rd = radius / 111300;
    var u = Math.random();
    var v = Math.random();
    var w = rd * Math.sqrt(u);
    var t = 2 * Math.PI * v;
    var x = w * Math.cos(t);
    var y = w * Math.sin(t);
    var xp = x / Math.cos(y0);
    // Resulting point.
    return {latitude: y + y0, longitude: xp + x0};
}
  // Generates number of random geolocation points given a center and a radius.
  export function generateRandomPoints (center, radius, count) {
    var points = [];
    for (var i = 0; i < count; i++) {
      points.push(generateRandomPoint(center, radius));
    }
    return points;
  }
  export function getMinutesBetweenTwoDates (futureDate, nowDate) {
    return parseInt(
      ((new Date(futureDate).getTime() - nowDate.getTime()) /
        (1000 * 60)) %
        60,
    );
  }
  export function getSecondsBetweenTwoDates (futureDate, nowDate) {
    return parseInt((futureDate.getTime() - nowDate.getTime()) / (1000) % 60); 
  }
  export function removeZeroIfStartWith(phoneNumber) {
    phoneNumber = ''.concat(phoneNumber);
    return phoneNumber.startsWith('0') ? phoneNumber.substring(1) : phoneNumber; 
  }
