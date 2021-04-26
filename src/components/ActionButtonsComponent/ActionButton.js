import React from 'react'; 
import { SafeAreaView, StyleSheet, Text, TouchableOpacity,} from 'react-native';

import ArrowIcon from './assets/learn_icon.svg';
import CorrectAnswerIcon from './assets/correct_icon.svg';
import WrongAnswerIcon from './assets/wrong_icon.svg';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 23,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '600',
    marginRight: 10,
  },
  defaultText: { 
    color: "#06B6D4", 
  },
  correctText: {
    color: "#06D440", 
  },
  wrongText: {
    color: "#D4068E"
  }
})


export default function ActionButton({ onPressFunction,buttonText, isCorrect, isDisabled}) {
 let buttonIcon;
 let style;

  if(isCorrect) {
  style = [styles.correctText, styles.text]
  buttonIcon = <CorrectAnswerIcon /> 
   
 } else if(!isCorrect && isDisabled) {
  style = [styles.wrongText, styles.text ] 
  buttonIcon = <WrongAnswerIcon />
 } else {
   buttonIcon = <ArrowIcon />
   style = [styles.defaultText, styles.text]
 } 
 
  return (
    <SafeAreaView style={styles.container} > 
        <TouchableOpacity onPress={onPressFunction} style={styles.button} disabled={isDisabled} isCorrect={isCorrect}>
            <Text style={style}>
            {buttonText}
            </Text>
            {buttonIcon}
        </TouchableOpacity>
    </SafeAreaView>
  )}