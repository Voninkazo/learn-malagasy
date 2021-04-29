import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import Button from './Button';

storiesOf('ButtonTextComponent', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Next Button', () => (
    <Button
      buttonText={'Next'}
      onPressFunction={() => alert('Clicked next')}
      disabled={false}
    />
  ))
  .add('Add Button', () => (
    <Button
      buttonText={'Add'}
      onPressFunction={() => alert('Clicked')}
      disabled={false}
    />
  ))

  .add('Disabled button', () => (
    <Button buttonText={'Add'} onPressFunction={() => null} disabled={true} />
  ));
