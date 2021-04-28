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
});

export default function ListItem({item, onPressFunction}) {
  return (
    <View style={styles.listContainer}>
      <Text>{item}</Text>
      <ActionButton
        buttonText="Learn"
        isDisabled={false}
        onPressFunction={onPressFunction}
      />
    </View>
  );
}
