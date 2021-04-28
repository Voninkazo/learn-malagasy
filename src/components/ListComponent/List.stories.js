import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import List from './List';

storiesOf('List Component', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('List', () => <List />);
