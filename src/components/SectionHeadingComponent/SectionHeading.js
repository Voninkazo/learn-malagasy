import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    color: '#111827',
  },
});

export default function SectionHeading({text}) {
  return (
    <View style={{padding: 23}}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
}
