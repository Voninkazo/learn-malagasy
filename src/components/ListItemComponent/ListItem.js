import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from '../ActionButtonsComponent/ActionButton';

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 16,
    paddingTop: 17,
    paddingBottom: 17,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#111827',
  },
});

export default function ListItem({
  item,
  onPressFunction,
  text,
  isDisabled,
  isCorrect,
}) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>{item}</Text>
      <ActionButton
        buttonText={text}
        isDisabled={isDisabled}
        onPressFunction={onPressFunction}
        isCorrect={isCorrect}
      />
    </View>
  );
}