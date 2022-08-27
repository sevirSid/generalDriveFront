import AsyncStorage from '@react-native-async-storage/async-storage';
 
  export const saveObjectToAsyncStorage = async (key, value)=>{
    AsyncStorage.setItem(key, JSON.stringify(value));
  }
  export const getObjectFromAsyncStorage = async (key)=>{
    let res = null;
    await AsyncStorage.getItem(key).then(val => {
      res = JSON.parse(val);
    });
    return res;
  }

