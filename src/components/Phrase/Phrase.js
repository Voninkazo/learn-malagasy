// components/Task.js
import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput} from 'react-native';

const styles = StyleSheet.create({
  selfareaView: {
    paddingRight: 23,
    paddingLeft: 23,
    paddingTop: 15,
  },

  textarea: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#111827',
    padding: 23,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  }
})

export default function Prase({text}) {
  console.log(text);
  return (
    <SafeAreaView style={styles.selfareaView} >
      <TextInput 
        multiline={true}
        numberOfLines={3}
        value={text}
        editable={false}
        style={styles.textarea}
      />
    </SafeAreaView>
  );
}