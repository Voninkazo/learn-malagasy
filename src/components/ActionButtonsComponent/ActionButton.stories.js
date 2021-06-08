import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';

storiesOf('ActionButtonComponents', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Pick button', () => (
    <ActionButton
      buttonText={'Pick'}
      isDisabled={false}
      correct={'Ref'} // This does not work
      onPressFunction={() => alert('Picked an answer')}
    />
  ))

  .add('Correct button', () => (
    <ActionButton
      buttonText={'Correct'}
      isDisabled={true}
      isCorrect={true}
      onPressFunction={() => alert('Right answer')}
      correct={'Ref'}
    />
  ))

  .add('Wrong button', () => (
    <ActionButton
      buttonText={'Wrong'}
      isCorrect={false}
      isDisabled={true}
      correct={'Ref'}
      onPressFunction={() => alert('Wrong answer')}
    />
  ));
