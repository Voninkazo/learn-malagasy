import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';

storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  // random text
  .add('Uneditable textarea', () => <Phrase text={'Roa ambin \' ny folo'}/>)
  .add('Uneditable textarea long text', () => <Phrase text={'You have answered all the questions in this category'}/>)