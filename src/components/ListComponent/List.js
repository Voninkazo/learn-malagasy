import * as React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import SectionHeading from '../SectionHeadingComponent/SectionHeading';
import ListItem from '../ListItemComponent/ListItem';
import Categories from '../../data/categories.json';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingRight: 23,
  },
  listContainer: {
    backgroundColor: '#ffffff',
  },
});

export default function List() {
  let categories = Categories['categories'];

  return (
    <ScrollView style={styles.container}>
      <SectionHeading text="Select a category:" />
      <View style={styles.listContainer}>
        {categories.map(cat => {
          return (
            <ListItem
              key={cat.id}
              item={cat.name['en']}
              onPressFunction={() => alert('learn')}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
