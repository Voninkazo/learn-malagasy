// components/Task.js
import * as React from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView:{
    paddingTop: 15,
    paddingRight: 23,
    paddingLeft: 23,
  },
  inputText: {
    padding: 23,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgba(17, 24, 39, 0.5)',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#E5E5E5',
  }
})

export default function InputTextarea({placeholder, inputValue, setInputValue}) {
   console.log( inputValue);
  
  return (
    <SafeAreaView  style={styles.safeAreaView}>
      <TextInput 
      editable={true}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={3}
      value={inputValue}
      onChangeText={(text) => setInputValue(text)}
      style={styles.inputText}
      />
    </SafeAreaView>
  );
}