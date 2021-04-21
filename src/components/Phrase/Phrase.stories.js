
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('name', () => <Phrase label= {'Sandy'}/>)
  .add('age', () => <Phrase label= {'20'} />)
  .add('city', () => <Phrase label= {'Ambato'} />);
