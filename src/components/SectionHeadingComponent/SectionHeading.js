import * as React from 'react';
import {Text, View} from 'react-native';

export default function SectionHeading({text}) {
  return (
    <View style={{padding: 23}}>
      <Text>{text}</Text>
    </View>
  );
}
