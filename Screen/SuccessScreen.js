import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomButton from './Components/CustomButton';
import {LOGIN_NOW_BUTTON} from '../shared/common/languageFR';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authenticateUser } from '../shared/services/backendService';
import { removeZeroIfStartWith } from './utils/helpersFR';

const SuccessScreen = ({navigation}) => {
  const route = useRoute();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState(false);
  // const resetPassword = route.params.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      setPhoneNumber(route?.params?.phoneNumber)
      setCountryCode(route?.params?.countryCode)
      setPassword(route?.params?.password)
      setResetPassword(route?.params?.resetPassword)
    }
  }, []);
  const onPressConnection = async () => {
    // if (validerPassword(userPassword)) {
      setLoading(true);
      const val = await authentification(removeZeroIfStartWith(phoneNumber), password);
      const localAuthResult = val;
      if (localAuthResult?.token) {
        await AsyncStorage.setItem('user', JSON.stringify(localAuthResult)).then(x =>{
          // setUserDetails({...userDetails, user: localAuthResult});
        navigation.replace('DrawerNavigationRoutes');
        }).catch((e) => {}
        );
        
      }
      setLoading(false);
  };
  const getUserDetails = async() => {
    let user;
    await AsyncStorage.getItem('userDetails').then(val => {
      user = JSON.parse(val);
      // setUserDetails(user);
    });
    return user.deviceId;
  }
  const authentification = async (phoneNumber, password) => {  
    let userDeviceId = await getUserDetails();
    // try {
      const userLogin = {
        phoneNumber: phoneNumber,
        password: password,
      };
      let result = await authenticateUser(userLogin);
        if(result){
        // setAuthResult(result);
        // localAuthResult = result;
        const user = JSON.stringify({deviceId: userDeviceId, phoneNumber: phoneNumber, 
          user_jwt_token: result?.token});
        // setUserDetails(user);
        AsyncStorage.setItem('user_id', phoneNumber).catch((e) => {}
        );
        AsyncStorage.setItem('user_jwt_token', result?.token).catch((e) => {}
        );
        AsyncStorage.setItem('userDetails', user).catch((e) => {}
        );
        } 
        return result;
  };
  // password: password,
  // phoneNumber:phoneNumber,
  // countryCode: countryCode
  return (
    <View style={styles.mainBody}>
      <Image
        source={require('../Image/success.png')}
        style={{
          height: 150,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text style={styles.successTextStyle}>{route?.textAAficher}</Text>
      {/* <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity> */}
         <ActivityIndicator
                    animating={loading}
                    color="blue"
                    size="large"
                  />
                 
      <View style={{width: '80%', alignSelf: 'center',}}>
        <CustomButton
          text={LOGIN_NOW_BUTTON}
          // onPress={() => navigation.navigate('AuthenticationScreen')}
          onPress={() => onPressConnection()}
        />
      </View>
    </View>
  );
};
export default SuccessScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    // borderTopLeftRadius: 410,
    // borderBottomRightRadius: 230,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    // marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    marginTop: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    // borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
    borderBottomWidth: 2,
  },
  borderColorF: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'blue',
  },
  borderColorO: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  registerTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
