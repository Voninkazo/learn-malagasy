// components/Task.js
import * as React from 'react';
import {Image, View, TouchableOpacity, Text } from 'react-native';
import PickSvg from '../assets/arrow_next.svg';


export default function Example({buttonText, onPressFunction, source}) {

  console.log(buttonText);

  return (
      <View>
        <TouchableOpacity 
          onPress={onPressFunction}
        >
        <Text>{buttonText}</Text>
        <Image />
        </TouchableOpacity>
      </View>
  );
}