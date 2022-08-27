import React from 'react';
import {StyleSheet, View,
  Pressable,
   Text, TextInput, 
  ActivityIndicator} from 'react-native';
import { colors } from '../../shared/common/theme';
const CustomButton = ({text,filled, level, hundredPercent, onPress, ...props}) => {
  // const {loading, ...attributes} = props;
// <CustomInput placeholder='username' value={name} setValue={setName}/>
  return (
      <Pressable onPress={onPress} style={{...styles.container,  
      backgroundColor: props?.disabled ? 'gray' :( filled ? 'white': (level === 'DANGER' ? 
      'red': styles.container.backgroundColor)),
      borderColor: filled ? (level === 'DANGER' ? 'red': colors.BLUE.default): null,
      borderWidth: filled ? 1: null,
      // backgroundColor: props?.disabled ?? styles.disabledButtonStyle,
      // borderColor: props?.disabled ?? styles.disabledTextStyle,
      }}
      {...props}>
      <Text style={{...styles.text, 
      color: filled ? colors.BLUE.default: styles.text.color,
      }}>{text}</Text>
      </Pressable>  
  ); 
};
export default CustomButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE.default,
    width: '100%',
    padding: 15,
    borderRadius:5,
    marginVertical: 5,
    alignItems: 'center',
  },
  text: {
      fontWeight:'bold',
      color:'white'
  },
  disabledButtonStyle: {
    backgroundColor: '#6c757d' ,
    borderColor: '#6c757d',
  },
  disabledTextStyle: {
    color: '#6c757d',
  },
  input: {
    // backgroundColor: '#FFFFFF',
    // height: 100,
    // width: 100,
    // borderRadius: 10,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});