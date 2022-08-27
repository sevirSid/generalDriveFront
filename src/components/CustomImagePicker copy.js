
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

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
var {height, width} = Dimensions.get('window');
const CustomImagePicker = ({textAAficher, setSelectedImage}) => {
  const [filePath, setFilePath] = useState(null);
  const [expand, setExpand] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 500,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setSelectedImage({ localUri: response.assets[0].uri });
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setSelectedImage({ localUri: response?.assets?.[0].uri });
      setFilePath(response);
    });
  };
  const cancelPhoto = () => {
    setFilePath(null);
    setSelectedImage(null);
    setExpand(false);
    return;
  };
  const handleExpand = () => {
    // if(expand)
      setExpand(expand => !expand);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {filePath?.assets[0].uri ? (
          <View style={styles.imagePosition}>
            
            <Image
              source={{uri: filePath?.assets[0].uri}}
              style={styles.photoResult}
              resizeMode={'cover'}
            />
            
            <View style={{justifyContent: 'center', marginLeft:25, alignSelf: 'flex-start',flexDirection: 'row', position: 'absolute'}}>
            <TouchableOpacity
              onPress={cancelPhoto}>
              <FontAwesome
                name={'window-close'}
                color={'red'}
                size={40}
              />
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignSelf: 'center', backgroundColor:'#EDFDF0', opacity: .5, borderRadius: 5}}>
              Change {textAAficher}
            </Text>
            </View>
          </View>
        ) : (
          <View style={styles.capturePhoto}>
           
              <View>
               {!filePath?.assets[0]?.uri ? (
                 <TouchableOpacity  onPress={handleExpand}>
                    <Text style={styles.capturePhotoTitle}>
                      Upload/Choose {textAAficher}
                    </Text>
                 </TouchableOpacity>
                
               ) : (
                 <Text style={styles.errorPhotoTitle}>Error {textAAficher}</Text>
               )}
             </View>
             {expand ? <View style={[{flex: 1,padding:10}, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row", justifyContent:'space-between'
              }]}>
                <View style={{ width: 30, }} >
                <TouchableOpacity
                 onPress={() => captureImage('photo')}>
                 <FontAwesome
                       style={styles.imageStyle2}
                       name={'camera'}
                       color={'blue'}
                       size={40}
                     />
               </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row', justifyContent:'center', width: 30, }} >
                <View style={styles.verticalLine} />
                </View>
                <View style={{ width: 30, }} >
                <TouchableOpacity
                 onPress={() => chooseFile('photo')}>
                     <FontAwesome
                       style={styles.imageStyle2}
                       name={'upload'}
                       color={'blue'}
                       size={40}
                     />
               </TouchableOpacity>
                </View>
              </View>: null}             
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CustomImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineWithSpaceBetween: {
    // flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imagePosition: {
    // position: 'relative',
    flex: 1,
    margin:10
  },
  capturePicClick: {
    // backgroundColor: 'white',
    flexDirection: 'row',
    position: 'relative',
    zIndex: 1,
  },
  flexView1: {
    // flex: 12,
  },
  imageFixStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCameraFixStyle: {
    // flex: 12,
    // alignSelf: 'flex-end',
    // marginLeft: 100,
    // right: 0
  },
  imageStyle2: {
    width: 150,
    height: height / 15,
  },
  myView: {
    flex: 2,
    height: 50,
    width: 1,
    alignItems: 'center',
  },
  verticalLine: {
    height: height / 18,
    width: 1.5,
    backgroundColor: 'gray',
    alignItems: 'center',
    // marginTop: 10,
  },
  myView2: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myView3: {
    flex: 2.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoResult: {
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    // paddingTop: 15,
    // paddingBottom: 10,
    // marginTop: 15,
    width: width /1.2,
    height: 80,
    borderColor: 'gray',
    borderWidth: 2,
  },
  capturePhoto: {
    width: width /1.2,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    backgroundColor: '#FCF8FF',
    margin: 5,
    // marginRight: 20,
    // paddingTop: 15,
    padding: 10,
  },
  capturePhotoTitle: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 15,
  },
  errorPhotoTitle: {
    color: 'red',
    fontSize: 13,
    textAlign: 'center',
    paddingBottom: 15,
  },
  // textStyle: {
  //     color: colors.GREY.btnPrimary,
  //     fontFamily: 'Roboto-Bold',
  //     fontSize: 13
  // }
});
