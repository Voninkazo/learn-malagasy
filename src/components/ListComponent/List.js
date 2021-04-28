import * as React from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';

import SectionHeading from '../SectionHeadingComponent/SectionHeading';
import ListItem from '../ListItemComponent/ListItem';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingRight: 23,
  },
  listContainer: {
    backgroundColor: '#ffffff',
  },
});

export default function List({
  heading,
  isEnglish,
  listsToDisplay,
  onPressFunction,
}) {
  return (
    <ScrollView style={styles.container}>
      <SectionHeading text={heading} />
      <View style={styles.listContainer}>
        {listsToDisplay.map(cat => {
          return (
            <TouchableOpacity onPress={onPressFunction} key={cat.id}>
              <ListItem
                item={isEnglish ? cat.name['en'] : cat.name['mg']}
                onPressFunction={onPressFunction}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
