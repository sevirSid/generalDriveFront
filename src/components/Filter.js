import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DatepickerRange from 'react-native-range-datepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../shared/theme/colors';
const windowWidth = Dimensions.get('window').width;
function Filter({listSize}) {
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [openEndTime, setOpenEndTime] = useState(false);

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [startDate])
  
  const setSpecificDate = () => {
    switch ('key') {
      case value:
        break;

      default:
        break;
    }
  };
  const displayStartDate = () => {
    // return (
    //   <>
    //     <Text onPress={() => setOpenStartDate(true)}>
    //       {' '}
    //       {date.toLocaleDateString('fr-FR')}
    //     </Text>
    //     <DatepickerRange
    //       startDate={startDate.toLocaleDateString()}
    //       untilDate={endDate.toLocaleDateString()}
    //       onConfirm={(startDate, untilDate) => {
    //         setStartDate(startDate);
    //         setEndDate(untilDate);
    //       }}
    //     />
    //   </>
    // );
    return (
      <View>
        {/* <Button title="Open" onPress={() => setOpenStartDate(true)} /> */}
        <Text onPress={() => setOpenStartDate(true)}>
          {' '}
          {startDate.toLocaleDateString('fr-FR')}
        </Text>
        <DatePicker
          modal
          open={openStartDate}
          date={startDate}
          locale={'fr'}
          is24hourSource={'locale'}
          onConfirm={(dateloc) => {
            console.log(dateloc);
            setStartDate(dateloc);
            setOpenStartDate(false);
          }}
          onCancel={() => {
            setOpenStartDate(false);
          }}
        />
      </View>
    );
  };
  const displayEndDate = () => {
    return (
      <View>
        <Button title="Open" onPress={() => setOpenStartDate(true)} />
        <DatePicker
          modal
          open={openStartDate}
          date={date}
          onConfirm={(date) => {
            setOpenStartDate(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    );
  };
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          // borderColor: 'gray',
          backgroundColor: '#fff',
          // borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            width: windowWidth / 2,
          }}>
          <FontAwesome name="map-marker" color={colors.primary} size={22} />
          <Text> Selectionnez une ville </Text>
        </View>
        <View style={{...styles.verticleLine, marginRight:10}}></View>
        <FontAwesome name="calendar" color={colors.primary} size={22} />
        <View style={{paddingRight:10, alignItems: 'center',}}>
          <Text style={{fontWeight:'bold'}}> De </Text>
          {displayStartDate()}
        </View>
        <View style={{alignItems: 'center',}}>
          <Text style={{fontWeight:'bold'}}> A</Text>
          {displayStartDate()}
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          // backgroundColor:'gray',
          marginBottom: 10,
        }}>
        <View style={{}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Resultats </Text>
        </View>
        <View style={{}}></View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 10}}>{listSize} Voitures </Text>
          
          <View style={{alignItems: 'flex-end', justifyContent: 'center', alignContent: 'center',}}>
          <Ionicons name="filter" color={colors.primary} size={26} />
          <Text style={{fontSize:9}}>+ Filteres</Text>
        </View>
        </View>
        
      </View>
      
    </View>
  );
}

export default Filter;

const styles = StyleSheet.create({
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  }
})