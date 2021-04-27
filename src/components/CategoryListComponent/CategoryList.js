import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from '../ActionButtonsComponent/ActionButton';

export default function CategoryList({categoryItem, onPressFunction}) {
  return (
    <View>
      <Text>{categoryItem}</Text>
      <ActionButton
        buttonText="Learn"
        isDisabled={false}
        onPressFunction={onPressFunction}
      />
    </View>
  );
}
