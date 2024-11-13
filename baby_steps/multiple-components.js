// Code to show how you can render same component in different ways, or multiple times
import React from 'react';
import {Text, View} from 'react-native';

// Cat is a child component
const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};

// Cafe is a parent component, since it renders Cat
const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

// each of these cats are unique and can be customized with props
export default Cafe;