import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  useEffect(() => {
    let  isMounted = true;
    if(isMounted){
      
    }
    return () => {
      isMounted = false;
    };
  }, []);
  
   
  const toggleDrawer = async () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <View style={styles.icon_drawe}/>
        <View style={styles.icon_drawe}/>
        <View style={styles.icon_drawe}/>
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;


const styles = StyleSheet.create({
  icon_drawe: {
    width: 35,
    height: 5,
    marginBottom: 3,
    marginTop: 3,
    marginLeft:6,
    backgroundColor: 'white'
    //margin: 6 0
  }
});