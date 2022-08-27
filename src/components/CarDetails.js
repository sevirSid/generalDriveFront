import React from 'react';
import {Text, View} from 'react-native';
import CarImageSlider from '../../Screen/Components/CarImageSlider';
import Location from '../bottom-tab-screens/Location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../shared/theme/colors';
import CustomButton from './CustomButton';
function CarDetails({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;
  console.log(itemId);
  // return <Text>CarDetails</Text>;
  const onPressBook = () => {
    console.log('reserver');
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        // justifyContent: 'center',
        // width: windowWidth,,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Ionicons name="arrow-back" color={colors.primary} size={26} />
        <Ionicons name="share-outline" color={colors.primary} size={26} />
      </View>
      <CarImageSlider
        imagesUrl={{
          bookings: null,
          brand: 'c mobile Aquitaine',
          color: 'gold',
          documents: [
            'https://images.elite-auto.fr/visuel/MERCEDES/mercedes_22c200amglinesd5b_angularfront.png',
            'https://cdn.autodiscount.fr/cdn-autodiscount/storage/cars/7280/Mercedes_classeC_NEW21_7FIN-std.png?width=600&format=auto&quality=75',
            'https://jeleasemavoiture.com/wp-content/plugins/mu-JLMV/img/cars/MERCEDES-BENZ/CLASSE-C.png',
            'https://img2.freepng.fr/20180612/eub/kisspng-car-2017-mercedes-benz-c-class-2018-mercedes-benz-lowest-price-5b20724f1e7cd9.2114351815288530711249.jpg',
          ],
          id: 4,
          insuranceExpirationDate: '2022-04-06T09:25:06Z',
          modelYear: 'zero',
          owner: null,
          registrationNumber: 'Centre gold',
          rentPrice: 25156,
          sellPrice: 90557,
          type: 'copy',
          wheelsNbr: 15688,
        }}
      />
      <CustomButton
        text={'Reserver'}
        filled={true}
        onPress={() => onPressBook()}
      />
    </View>
  );
}

export default CarDetails;
