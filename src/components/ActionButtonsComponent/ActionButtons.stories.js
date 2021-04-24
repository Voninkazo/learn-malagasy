
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ActionButtons from './ActionButtons';

function DefaultActionButton() {

  return (
    <ActionButtons 
      buttonText={'Pick'} 
      isDisabled={false}
      onPressFunction={() => alert('Picked an answer')}
    />
  )
}

function CorrectActionButton() {

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isCorrect, setIsCorrect] = React.useState(true);

  return (
    <ActionButtons 
      buttonText={'Correct'} 
      isDisabled={isDisabled}
      isCorrect={isCorrect}
      onPressFunction={() => alert('Right answer')}
    />
  )
}

function WrongActionButton() {

  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isCorrect, setIsCorrect] = React.useState(false);

  return (
    <ActionButtons 
      buttonText={'Wrong'} 
      isCorrect={isCorrect}
      isDisabled={isDisabled}
      onPressFunction={() => alert('Wrong answer')}
    />
  )
}

storiesOf('ActionButtonComponents', module)

  .addDecorator(story => <View style={{padding: 23, backgroundColor: 'blue'}}>{story()}</View>)

  .add('Pick button',() => <DefaultActionButton />)

  .add('Correct button', () => <CorrectActionButton />)

  .add('Wrong button', () => <WrongActionButton />)