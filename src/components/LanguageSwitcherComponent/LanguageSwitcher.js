import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ArrowSwitcher from './assets/arrow.svg';

export default function LanguageSwitcher({
  malagasySwitcher,
  englishSwitcher,
  onPressFunction,
  isEnglish,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPressFunction}>
        <Text>{isEnglish ? englishSwitcher : malagasySwitcher}</Text>
        <ArrowSwitcher />
        <Text>{isEnglish ? malagasySwitcher : englishSwitcher}</Text>
      </TouchableOpacity>
    </View>
  );
}
