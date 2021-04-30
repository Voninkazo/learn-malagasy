import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ArrowSwitcher from './assets/arrow.svg';

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#06B6D4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  icon: {
    marginRight: 6,
    marginLeft: 6,
  },
});

export default function LanguageSwitcher({
  malagasySwitcher,
  englishSwitcher,
  onPressFunction,
  isEnglish,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPressFunction} style={styles.button}>
        <Text style={styles.text}>
          {isEnglish ? englishSwitcher : malagasySwitcher}
        </Text>
        <ArrowSwitcher style={styles.icon} />
        <Text style={styles.text}>
          {isEnglish ? malagasySwitcher : englishSwitcher}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
