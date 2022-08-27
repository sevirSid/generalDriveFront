import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


const HorizontalLine = ({
}) => {

  useEffect(() => {
    
  }, []);
  return (
    <View style={styles.body}/>
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({
  body: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  
});
