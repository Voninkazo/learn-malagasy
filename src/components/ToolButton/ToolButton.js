import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import AddIcon from './assets/add_icon.svg';
import TickIcon from './assets/tick_icon.svg';
import DoubleTickIcon from './assets/double_tick_icon.svg';
import BackIcon from './assets/back_icon.svg';
import LightModeIcon from './assets/light_mode_icon.svg';

const styles = StyleSheet.create({
  container: {
    padding: 23,
  },
  button: {
    backgroundColor: '#06B6D4',
    padding: 13,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
});

export default function ToolButton({buttonName, onPressFunction}) {
  let icon;

  if (buttonName === 'add') {
    icon = <AddIcon />;
  } else if (buttonName === 'tick') {
    icon = <TickIcon />;
  } else if (buttonName === 'double tick') {
    icon = <DoubleTickIcon />;
  } else if (buttonName === 'back') {
    icon = <BackIcon />;
  } else {
    icon = <LightModeIcon />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction} style={styles.button}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}
