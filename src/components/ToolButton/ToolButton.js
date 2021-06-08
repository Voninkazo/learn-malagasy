import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import AddIcon from './assets/add_icon.svg';
import TickIcon from './assets/tick_icon.svg';
import DoubleTickIcon from './assets/double_tick_icon.svg';
import BackIcon from './assets/back_icon.svg';
import LightModeIcon from './assets/light_mode_icon.svg';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06B6D4',
    padding: 13,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  addBtnStyle: {
    marginLeft: 0,
  },
});

export default function ToolButton({btnLabel, onPressFunction}) {
  let icon; // instead of initializing it as an empty variable, which is not a good thing to do, consider using an object:
  // let icon = {
  //   add: () => <AddIcon />,
  //   tick: () => <TickIcon />,
  //   ... an so on
  // }
  // ans then call it with icon[btnLabel]
  let individualStyle; // What is this used for?

  if (btnLabel === 'add') {
    icon = <AddIcon />;
    individualStyle = styles.addBtnStyle; 
  } else if (btnLabel === 'tick') {
    icon = <TickIcon />;
  } else if (btnLabel === 'double tick') {
    icon = <DoubleTickIcon />;
  } else if (btnLabel === 'back') {
    individualStyle = styles.addBtnStyle;
    icon = <BackIcon />;
  } else {
    icon = <LightModeIcon />;
  }

  return (
    <View>
      <TouchableOpacity onPress={onPressFunction} style={styles.button}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}
