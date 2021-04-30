import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import ToolBar from './ToolBar';

storiesOf('Tool bar', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Tool bar home ', () => (
    <ToolBar
      isHomeScreen={false}
      malagasySwitcher="MA"
      englishSwitcher="EN"
      onPressFunction={() => alert('alert')}
    />
  ));
