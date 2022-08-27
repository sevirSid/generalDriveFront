import React, { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CHANGE_NUMBER, CHANGE_NUMBER_LINK } from "../../shared/common/language";
import CustomButton from "./CustomButton";

const InputVerification = ({
  confirmCode, setCode, setIsValidPhoneNumber, setConfirm
  }) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const [otp, setOtp] = useState({'un': '', 'deux': '', 'trois': '', 'quatre': '', 'cinq': '', 'six': ''});
    const otpRef = useRef('');
    const mapOtp = (otpArray) =>{
      let res = '';
    Object.keys(otpArray).forEach(function(key,index) {
      res =  res.concat(otpArray[key]);
    });
    return res;
    }
    return (
      <View style={stylesVerifOTP.container}>
        <View style={stylesVerifOTP.otpContainer}>
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({...otp, un: text});
                otpRef.current = {...otpRef.current , un: text}; 
                setCode(mapOtp(otpRef.current));
                text && secondInput.current.focus();
              }}
            />
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({...otp, deux: text});
                otpRef.current = {...otpRef.current , deux: text}; 
                setCode(mapOtp(otpRef.current));
                text ? thirdInput.current.focus() : firstInput.current.focus(); 
              }}
            />
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({...otp, trois: text});
                 otpRef.current = {...otpRef.current , trois: text}; 
                 setCode(mapOtp(otpRef.current));
                text ? fourthInput.current.focus() : secondInput.current.focus();
              }}
            />
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({...otp, quatre: text});
                otpRef.current = {...otpRef.current , quatre: text}; 
                setCode(mapOtp(otpRef.current));
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
            />
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setOtp({...otp, cinq: text});
                otpRef.current = {...otpRef.current , cinq: text}; 
                setCode(mapOtp(otpRef.current));
                text ? sixthInput.current.focus() : fourthInput.current.focus();}}
            />
            <TextInput
              style={stylesVerifOTP.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setOtp({...otp, six: text});
                otpRef.current = {...otpRef.current , six: text}; 
                setCode(mapOtp(otpRef.current));
                !text && fifthInput.current.focus();
              }}
            />
        </View>
      </View>
    );
  };
  export default InputVerification;
  const stylesVerifOTP = StyleSheet.create({
    container: {
      flex: 1,
      // height:50,
      // maxHeight:90,
      // backgroundColor: 'white',
    },
    otpContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    otpText: {
      fontSize: 25,
      color: 'black',
      padding: 5,
      margin: 5,
      textAlign: 'center',
      padding: 10,
      borderRadius: 5,
      borderColor: '#3871F3',
      borderWidth: 0.5,
    },
  });