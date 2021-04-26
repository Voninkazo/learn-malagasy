import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import ToolButton from './ToolButton';

import AddIcon from './assets/add_icon.svg';
import TickIcon from './assets/tick_icon.svg';
import DoubleTickIcon from './assets/double_tick_icon.svg';
import BackIcon from './assets/back_icon.svg';
import LightModeIcon from './assets/light_mode_icon.svg';

storiesOf('ToolButtonComponent', module)
  .addDecorator(getStory => (
    <View style={{backgroundColor: 'blue'}}>{getStory()}</View>
  ))

  .add('Tool buttons', () => (
    <ToolButton buttonIcon={'./assets/add_icon.svg'} />
  ));
