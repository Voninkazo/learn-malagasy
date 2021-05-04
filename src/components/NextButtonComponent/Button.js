// components/Task.js
import * as React from 'react';
import {TouchableHighlight, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 66,
  },
  button: {
    maxWidth: 90,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: 161,
  },
  activeButton: {
    backgroundColor: '#06B6D4',
  },

  disabledButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#06B6D4',
    borderStyle: 'solid',
  },

  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },

  activeText: {
    color: '#fff',
  },

  disabledText: {
    color: '#06B6D4',
  },
});

export default function Button({buttonText, onPressFunction, disabled}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPressFunction}
        disabled={disabled}
        style={
          disabled
            ? [styles.disabledButton, styles.button]
            : [styles.activeButton, styles.button]
        }>
        <Text
          style={
            disabled
              ? [styles.disabledText, styles.text]
              : [styles.activeText, styles.text]
          }>
          {buttonText}
        </Text>
      </TouchableHighlight>
    </View>
  );
}
