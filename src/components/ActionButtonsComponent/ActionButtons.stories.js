
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ActionButtons from './ActionButtons';

storiesOf('ActionButtonComponents', module)

  .addDecorator(story => <View>{story()}</View>)

  .add('Pick button',() => <ActionButtons buttonText={'Pick'} onPressFunction={() => alert('Picked an answer')}/>)

  .add('Correct button', () => <ActionButtons buttonText={'Correct'} onPressFunction={() => alert('Picked correct')} />)

  .add('Wrong button', () => <ActionButtons buttonText={'Wrong'} onPressFunction={() => alert('Picked wrong')} />)

  