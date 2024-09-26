import React from 'react';
import {Text, View} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
//prints hello world in the center of the page! :) 
      <Text>Hello world!! :) </Text>
    </View>
  );
};

export default YourApp;