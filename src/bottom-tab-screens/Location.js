import React from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CarsListScreen } from '../../Screen/CarsListScreen';
import { selectListVehiclesToRentSize } from '../../slices/navSlice';
import Filter from '../components/Filter';
const windowWidth = Dimensions.get('window').width;
function Location() {
  
  const listVehiclesToRentSize = useSelector(selectListVehiclesToRentSize);
  console.log(listVehiclesToRentSize);
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          // flexDirection: 'row',
          
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            width: windowWidth,
           padding: 10,
          }}>
            <Filter listSize={listVehiclesToRentSize}/>
          <CarsListScreen />
        </View>
      </SafeAreaView>
    );
  }

export default Location