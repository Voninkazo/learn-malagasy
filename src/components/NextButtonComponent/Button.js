// components/Task.js
import * as React from 'react';
import { TouchableHighlight, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  activeButton:{
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    maxWidth: 90,
    height: 40,
    justifyContent: 'center'
  },

  disabledButton: {
    backgroundColor: '#fff',
    maxWidth: 90,
    height: 40,
    borderWidth: 1,
    borderColor: '#06B6D4',
    borderStyle: 'solid',
    borderRadius: 30,
    justifyContent: 'center',
  },

  activeText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
     fontSize: 16,
    lineHeight: 19,
  },

  disabledText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#06B6D4',
    fontSize: 16,
    lineHeight: 19,
  }
})

export default function Button({buttonText, onPressFunction, disabled}) {

  return (
      <View>
        <TouchableHighlight 
          onPress={onPressFunction} 
          disabled={disabled}
          style={disabled ? styles.disabledButton : styles.activeButton}
        >
        <Text style={disabled ? styles.disabledText : styles.activeText}>{buttonText}</Text>
      </TouchableHighlight>
      </View>
  );
}