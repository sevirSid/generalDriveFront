import React, {useState, useRef,useEffect, createRef} from 'react';
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
  BackHandler,
} from 'react-native';
// import { Icon } from 'react-native-elements';
import Loader from './Components/Loader';
import Header from './Header';
import PhoneSignIn from './PhoneSignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Constantes from '../Screen/utils/Constantes';
import MotDePasseOublie from './MotDePasseOublie';
import {CHANGE_NUMBER_LINK, FORGOT_PASSWORD_LINK, LOGIN_BUTTON, LOGIN_HEADER, 
  NEXT_BUTTON, PHONE_NUMBER_HEADER, MOBILE_NO_BLANK_ERROR, LOGIN_ERROR, PASSWORD_ERROR} from '../shared/common/language'
import {authenticateUser, userExist} from "../shared/services/backendService"
import CustomButton from './Components/CustomButton';
import { useFocusEffect } from '@react-navigation/native';
const LoginScreen = ({navigation}) => {
  const [existU, setExistU] = useState(null);
  const [tokenStrJWT, setTokenStrJWT] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('0760435861');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [userPassword, setUserPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [sendOTP, setSendOTP] = useState(false);
  const [authResult, setAuthResult] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [errortext, setErrortext] = useState('');
  let localAuthResult = null;
  let localExisteU = null;
  const login = {
    phoneNumber: String,
    password: String,
  };
  // useEffect(() => {
  //   let isMounted = true;
  //   if(isMounted)
  //     //  getUserDetails();
  //   return () => {
  //     // Geolocation.clearWatch(watchID);
  //     isMounted = false;
  //   };
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
          return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', false);
    },[])
  );
  const passwordInputRef = createRef();
  const handleInputFocus = () => {
    setIsFocused({isFocused: true});
  };
  const handleInputBlur = () => {
    setIsFocused({isFocused: false});
  };
  const getUserDetails = async() => {
    let user;
    await AsyncStorage.getItem('userDetails').then(val => {
      user = JSON.parse(val);
      setUserDetails(user);
    });
    return user.deviceId;
  }
  const onChangePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    if (phoneNumber && phoneNumber.length === 10) {
      setErrortext('');
    }
  };
  const validerPhoneNumber = (character) => {
    return new RegExp(/^([0-9]*)$/).test(character);
  };
  const onPressSuivant = async () => {
    if (validerPhoneNumber(phoneNumber)) {
      setErrortext('');
      if (!phoneNumber || phoneNumber.length < 10) {
        setErrortext(MOBILE_NO_BLANK_ERROR);
        return;
      }
      await isUserExist(phoneNumber);
      if (localExisteU) {
        setIsValidPhoneNumber(true);
      }
    } else {
      setErrortext(MOBILE_NO_BLANK_ERROR);
    }
  };
  const authentification = async (phoneNumber, password) => {
    setUserPassword(password);
    setPhoneNumber(phoneNumber);
    login.phoneNumber = phoneNumber;
    login.password = password;
    let userDeviceId = await getUserDetails();
    // try {
      const userLogin = {
        phoneNumber: phoneNumber,
        password: password,
      };
      let result = await authenticateUser(userLogin);
        if(result){
        setAuthResult(result);
        localAuthResult = result;
        const user = JSON.stringify({deviceId: userDeviceId, phoneNumber: phoneNumber, 
          user_jwt_token: result?.token});
        setUserDetails(user);
        AsyncStorage.setItem('user_id', phoneNumber);
        AsyncStorage.setItem('user_jwt_token', result?.token);
        AsyncStorage.setItem('userDetails', user);
        } else {
          setErrortext(LOGIN_ERROR);
        }
        return result;
  };
  const isUserExist = async (phoneNumber) => {
    setPhoneNumber(phoneNumber);
        let result = await userExist(phoneNumber, tokenStrJWT);

        if(result && JSON.stringify(result).includes('status code 400')){
        setSendOTP(true);
        // navigation.navigate('OtpDesign', {
        navigation.navigate('PhoneSignIn', {
          // phoneNumber: '+22242132139',
          phoneNumber: phoneNumber,
          showLinks: false,
        });
      } else if(result){ 
        setExistU(result);
        localExisteU = result;
      }
  };
  const onChangePassword = (password) => {
    if (validerPassword(password)) {
      setErrortext('');
    }
    setUserPassword(password);
  };
  const validerPassword = (password) => {
    return password && password.length >= 6;
  };
  const onSeConnecter = async () => {
    if (validerPassword(userPassword)) {
      setLoading(true);
      const val = await authentification(phoneNumber, userPassword);
      localAuthResult = val;
      if (localAuthResult?.token) {
        setTokenStrJWT(localAuthResult?.token);
        await AsyncStorage.setItem('user', JSON.stringify(localAuthResult));
        setUserDetails({...userDetails, user: localAuthResult});
        navigation.replace('DrawerNavigationRoutes');
      }
      setLoading(false);
    } else {
      setErrortext(PASSWORD_ERROR);
    }
  };
  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
        }}>
        {!isValidPhoneNumber ? (
          <View style={{margin: 10, borderRadius: 16}}>
            <Header textAAficher= {PHONE_NUMBER_HEADER} />
          </View>
        ) : (
          <View style={{margin: 10, borderRadius: 16}}>
            <Header textAAficher={LOGIN_HEADER} />
          </View>
        )}
        <View>
            <View>
              {!isValidPhoneNumber ? (
                <View>
                  <View style={styles.SectionStyle}>
                    <TextInput
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      style={styles.inputStyle}
                      onChangeText={(phoneNumber) =>
                        onChangePhoneNumber(phoneNumber)
                      }
                      placeholder="Phone Number"
                      placeholderTextColor="#8b9cb5"
                      autoCapitalize="none"
                      keyboardType="phone-pad"
                      returnKeyType="next"
                      maxLength={10}
                      value={phoneNumber}
                      onSubmitEditing={() =>
                        passwordInputRef.current &&
                        passwordInputRef.current.focus()
                      }
                      underlineColorAndroid="#f000"
                      blurOnSubmit={false}
                      autoFocus={true}
                    />
                  </View>
                  <View>
                    {errortext != '' ? (
                      <Text style={styles.errorTextStyle}>{errortext}</Text>
                    ) : null}
                  </View>
                  <View style={{...styles.customButtonStyle}}>
                  <CustomButton
                    text={NEXT_BUTTON}
                    filled={false}
                    onPress={() => onPressSuivant()}
                  />
                  </View>
                </View>
              ) : null}
            </View>
            {isValidPhoneNumber ? (
              <View>
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={{}} >
                    <ScrollView>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(password) => onChangePassword(password)}
                    placeholder="Enter Password" //12345
                    placeholderTextColor="#8b9cb5"
                    keyboardType="default"
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                  />
                </View>
                <View>
                  {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>{errortext}</Text>
                  ) : null}
                </View>
                <View>
                  <View style={styles.customButtonStyle}>
                    <CustomButton
                    text={LOGIN_BUTTON}
                    filled={false}
                    onPress={() => onSeConnecter()}
                  />
                  </View>
                </View>
                <Text
                  style={{...styles.registerTextStyle, color:'gray', fontSize: 12}}
                  onPress={() => navigation.navigate('MotDePasseOublie')}>
                  {FORGOT_PASSWORD_LINK}
                </Text>
                <Text
                  style={styles.registerTextStyle}
                  onPress={() => setIsValidPhoneNumber(false)}>
                  {CHANGE_NUMBER_LINK}
                </Text>
                </ScrollView>
                </KeyboardAvoidingView>
              </View>
            ) : null}
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    borderTopLeftRadius: 410,
    borderBottomRightRadius: 230,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    marginTop: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  customButtonStyle: {
    // height: 40,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
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
