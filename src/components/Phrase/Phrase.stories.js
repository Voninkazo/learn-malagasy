import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';

storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('textarea', () => <Phrase text={'Roa ambin \' ny folo'}/>)