import React from 'react';
import {View, Image, StyleSheet, FlatList, Dimensions, ScrollView, Text} from 'react-native';
import CarImageSlider from './CarImageSlider';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  let cars = [
    'https://loremflickr.com/320/240?random=1',
    'https://loremflickr.com/320/240?random=2',
    'https://loremflickr.com/320/240?random=3',
    'https://loremflickr.com/320/240?random=4',
  ];
  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ width: windowWidth,}}>
      <FlatList
      data={cars}
      keyExtractor={(item) => String(Math.random())}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View>
          {/* <CarImageSlider imagesUrl={item} /> */}
          
          {/* <Image
            source={{
              uri: item,
            }}
            key={Math.random()}
            // style={styles.imageStyle}
            style={{
              height: 200,
                width: windowWidth,
                marginBottom:10,
                // resizeMode: 'contain',
            }}
          /> */}
        </View>
      )}
    />
    </View>
    // </ScrollView>
  );
};

export default DisplayAnImage;
