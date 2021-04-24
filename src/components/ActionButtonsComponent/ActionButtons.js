// components/Task.js
import * as React from 'react';
import {Image, View, TouchableOpacity, Text } from 'react-native';


export default function ActionButtons({buttonText, onPressFunction}) {

  return (
      <View>
        <TouchableOpacity 
          onPress={onPressFunction}
        >
        <Text>{buttonText}</Text>
        {
          buttonText === 'Pick' ?
          <Image source={require('../assets/pick.png')} />
          : buttonText === 'Correct' ?
          <Image source={require('../assets/correct.png')} />
          : buttonText === 'Wrong' ?
          <Image source={require('../assets/wrong.png')} />
          :
          ''
        }
        </TouchableOpacity>
      </View>
  );
}