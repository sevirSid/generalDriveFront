import React, {
    useEffect,
    useRef,
    useState,
  } from 'react';
  import {
    Animated,
    Text,
    View,
  } from 'react-native';
  const Message = (props) => {
    const opacity = useRef(new Animated.Value(0))
      .current;
      const duration = 900;
    useEffect(() => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(opacity, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        props.onHide();
      });
    }, []);
    return (
        <View
          style={{
            position: 'absolute',
            top: 45,
            left: 0,
            right: 0,
          }}
        >
      <Animated.View
        style={{
          opacity,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
          margin: 10,
          marginBottom: 5,
          backgroundColor: '#28a745',
          padding: 10,
          borderRadius: 4,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 6,
        }}
      >
        <Text style={{color: '#fff', fontSize: 18, fontWeight:'bold'}}>{props.message}</Text>
      </Animated.View>
      </View>
    );
  };
//   export default Message;
  export default (props) => {
    return (
      <>
            <Message
              message={ props.message }
              onHide={() => {
              }}
            />
      </>
    );
  };