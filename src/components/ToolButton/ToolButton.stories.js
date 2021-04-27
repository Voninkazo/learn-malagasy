import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import ToolButton from './ToolButton';

storiesOf('ToolButtonComponent', module)
  .addDecorator(getStory => <View>{getStory()}</View>)

  .add('Add button', () => (
    <ToolButton buttonName={'add'} onPressFunction={() => alert('Add')} />
  ))

  .add('Tick button', () => (
    <ToolButton
      buttonName={'tick'}
      onPressFunction={() => alert('Go to seen')}
    />
  ))

  .add('Double tick button', () => (
    <ToolButton
      buttonName={'double tick'}
      onPressFunction={() => alert('Go to learn')}
    />
  ))

  .add('Back button', () => (
    <ToolButton buttonName={'back'} onPressFunction={() => alert('Go back')} />
  ))

  .add('Light switcher button', () => (
    <ToolButton
      buttonName={'switch light'}
      onPressFunction={() => alert('Switch light')}
    />
  ));
