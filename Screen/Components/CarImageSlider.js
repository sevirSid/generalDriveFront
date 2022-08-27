import React from 'react';
import {View, Text, Image, FlatList, StyleSheet, Dimensions} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
const windowWidth = Dimensions.get('window').width;
function CarImageSlider({imagesUrl}) {

 
  return (
    <View style={styles.mainBody}>
        <SliderBox
        resizeMode="cover"
      images={imagesUrl.documents}
    //   onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
    //   currentImageEmitter={(index) => console.warn(`current pos is: ${index}`)}
    />
      {/* <FlatList
        data={imagesUrl}
        keyExtractor={(item) => Math.random()}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              //   width: '100%',
            }}>
            <Text>{index}</Text>
            <Image
              source={{
                uri: item.documents[0],
              }}
              key={Math.random()}
              style={{
                height: 150,
                width: 150,
                resizeMode: 'contain',
                alignContent: 'center',
              }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={index}
      /> */}
    </View>
  );
}

export default CarImageSlider;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    width: windowWidth,
    justifyContent: 'center',
    //   backgroundColor: 'white',
    alignContent: 'center',
    // borderTopLeftRadius: 410,
    // borderBottomRightRadius: 230,
    // padding: 10,
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
    //   padding: 10,
    //   margin: 5,
    height: 250,
    width: 100,
    //   resizeMode: '',
    //   alignItems: 'center',
  },
});
