
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';

import {Controller} from 'react-hook-form';
import CustomImagePicker from './CustomImagePicker';
var {height, width} = Dimensions.get('window');
const CustomImagePickerHooks = ({
  control,
  name,
  rules = {},
  textAAficher, 
  setSelectedImage,
  selectedImage,
  driverDocs,
}) => {
  
  return (
    // <View>
       <Controller
         rules={rules}
         control={control}
         name={name}
         render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
              <CustomImagePicker error={error} 
              onChange={onChange}
              value={value}
              name={name}
              textAAficher={textAAficher} 
              // selectedImage={selectedImage} setSelectedImage={setSelectedImage} 
              driverDocs={driverDocs}
               />
            
        )}
       />
      //</View>
  );
};

export default CustomImagePickerHooks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fffdde',
    alignItems: 'center',
  },

});
