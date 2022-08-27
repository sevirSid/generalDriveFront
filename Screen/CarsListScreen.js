import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';


import {fetchCars} from '../shared/services/backendService';
import { setListVehiclesToRentSize } from '../slices/navSlice';
import CarImageSlider from './Components/CarImageSlider';
import DisplayAnImage from './Components/DisplayAnImage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export function CarsListScreen() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  //   const  theme = useTheme();
  const dispatch = useDispatch();
  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchAllCars() {
      try {
        const response = await fetchCars();
        setCars(response);
        if(response){
          dispatch(setListVehiclesToRentSize(response.length));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllCars();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // width: windowWidth,,
      }}>
      <FlatList
        // style={{margin: 10}}
        data={cars}
        keyExtractor={(item) => String(Math.random())}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View 
            style={{
              // backgroundColor: '#EEEDE7',
              borderColor:'#F2F2F2',
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
            }}>
            <Pressable
            onPress={()=> {
              navigation.navigate('CarDetails', {itemId: item});
            }}
            >
            <View style={{borderRadius: 10}}>
              <CarImageSlider imagesUrl={item} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // padding: 10,
                alignItems: 'center'
              }} >
              <View style={{}}>
                <Text style={{fontWeight: 'bold',}}>{item.brand}</Text>
                <Text>{item.registrationNumber}</Text>
              </View>
              <View >
                <Text style={{fontWeight: 'bold',}}>{item.rentPrice} MRU</Text>
              </View>
            </View>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

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
    //   padding: 10,
    //   margin: 5,
    height: 250,
    width: 100,
    //   resizeMode: '',
    //   alignItems: 'center',
  },
});
