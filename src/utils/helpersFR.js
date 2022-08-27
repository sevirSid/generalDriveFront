import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
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
  export const renderAlert = (title, body) => {
    Alert.alert(
      `Title: ${title} `,
      `Body:  ${body} `,
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            return null;
          },
        },
      ],
      {cancelable: false},
    );
  }