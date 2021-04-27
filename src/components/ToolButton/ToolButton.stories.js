import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import ToolButton from './ToolButton';

storiesOf('ToolButtonComponent', module)
  .addDecorator(getStory => <View>{getStory()}</View>)

  .add('Add button', () => (
    <ToolButton btnLabel={'add'} onPressFunction={() => alert('Add')} />
  ))

  .add('Tick button', () => (
    <ToolButton btnLabel={'tick'} onPressFunction={() => alert('Go to seen')} />
  ))

  .add('Double tick button', () => (
    <ToolButton
      btnLabel={'double tick'}
      onPressFunction={() => alert('Go to learn')}
    />
  ))

  .add('Back button', () => (
    <ToolButton btnLabel={'back'} onPressFunction={() => alert('Go back')} />
  ))

  .add('Light switcher button', () => (
    <ToolButton
      btnLabel={'switch light'}
      onPressFunction={() => alert('Switch light')}
    />
  ));
