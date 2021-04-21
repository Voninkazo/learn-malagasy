
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Example from './Example';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('name', () => <Example label= {'Sandy'}/>)
  .add('age', () => <Example label= {'20'} />)
  .add('city', () => <Example label= {'Ambato'} />);
