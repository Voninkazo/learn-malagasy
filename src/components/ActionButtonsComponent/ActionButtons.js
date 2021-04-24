// components/Task.js
import * as React from 'react';
import { SelfAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ArrowIcon from './assets/learn_icon.svg';
import CorrectAnswerIcon from './assets/correct_icon.svg';
import WrongAnswerIcon from './assets/wrong_icon.svg';

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


export default function ActionButtons({buttonText,isCorrect,isDisabled, onPressFunction}) {

  console.log(ArrowIcon)
  let buttonIcon;

  if(isCorrect) {
    buttonIcon = <CorrectAnswerIcon />
  }
  else if(!isCorrect && isDisabled) {
    buttonIcon = <WrongAnswerIcon />
  }

  else {
    buttonIcon = <ArrowIcon />
  }

  return (
      <SelfAreaView style={styles.container}>
        <TouchableOpacity 
          onPress={onPressFunction}
          style={styles.button}
        >
        <Text 
          style={
            buttonText === 'Wrong' ?
            styles.wrongText :
            buttonText === 'Correct' ?
            styles.correctText :
            styles.defaultText
          } 
        >
          {buttonText}
        </Text>
          {buttonIcon}
        </TouchableOpacity>
      </SelfAreaView>
  );
}