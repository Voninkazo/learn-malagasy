import * as React from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';

import ListItem from '../ListItemComponent/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffffff',
  },
});

export default function List({
  onPressFunction,
  buttonText,
  item,
  keyId,
  isCorrect,
  isDisabled,
}) {
  return (
    <ScrollView>
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={onPressFunction}>
          <ListItem
            item={item}
            onPressFunction={onPressFunction}
            text={buttonText}
            key={keyId}
            isCorrect={isCorrect}
            isDisabled={isDisabled}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
