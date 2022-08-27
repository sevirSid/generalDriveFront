import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
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
