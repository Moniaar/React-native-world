import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = ['Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!'];

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundcolor: '#EDEFEE',
        }}>
        <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
        </Text>
        <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        {menuItemsToDisplay}
        </Text>
      </ScrollView>
    </View>
  );
}
