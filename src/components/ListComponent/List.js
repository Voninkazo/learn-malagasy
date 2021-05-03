import * as React from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';

import SectionHeading from '../SectionHeadingComponent/SectionHeading';
import ListItem from '../ListItemComponent/ListItem';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffffff',
  },
});

export default function List({
  heading,
  isEnglish,
  listsToDisplay,
  onPressFunction,
  buttonText,
  itemId,
  item,
  keyId,
  isCorrect,
}) {
  return (
    <ScrollView>
      {/* <SectionHeading text={heading} /> */}
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={onPressFunction}>
          <ListItem
            item={item}
            onPressFunction={onPressFunction}
            text={buttonText}
            itemId={itemId}
            key={keyId}
            isCorrect={isCorrect}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
