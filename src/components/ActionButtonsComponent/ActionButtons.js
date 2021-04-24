// components/Task.js
import * as React from 'react';
import {Image, View,SelfAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Learn from '../../assets/learn_icon.svg'
// import Correct from '../../assets/correct_icon.svg';
// import Wrong from '../../assets/wrong_icon.svg';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 23,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
  },

  defaultText: {
    color: '#06B6D4',
  },

  correctText: {
    color: '#06D440',
  },

  wrongText: {
    color: '#D4068E',
  },

});


export default function ActionButtons({buttonText, onPressFunction}) {

console.log(Learn)

  return (
      <SelfAreaView style={styles.container}>
        <TouchableOpacity 
          onPress={onPressFunction}
          style={styles.button}
        >
        <Text 
          style={
            buttonText === 'Pick' ?
            styles.defaultText :
            buttonText === 'Correct' ?
            styles.correctText :
            styles.wrongText
          }
        >
          {buttonText}
        </Text>
         <Learn />
        </TouchableOpacity>
      </SelfAreaView>
  );
}