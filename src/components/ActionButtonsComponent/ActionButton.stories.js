
import * as React from 'react';
import { View } from 'react-native';
import {useState} from 'react';

import { storiesOf } from '@storybook/react-native';

import ActionButton from './ActionButton';

// function DefaultActionButton() {
//  const [isDisabled, setIsDisabled] = useState(false);

//   return (
//     <ActionButton 
//       buttonText={'Pick'} 
//       isDisabled={isDisabled}
//       onPressFunction={() => alert('Picked an answer')}
//     />
//   )
// }

// function CorrectActionButton() {

//   const [isDisabled, setIsDisabled] = useState(true);
//   const [isCorrect, setIsCorrect] = useState(true);

//   return (
//     <ActionButton 
//       buttonText={'Correct'} 
//       isDisabled={isDisabled}
//       isCorrect={isCorrect}
//       onPressFunction={() => alert('Right answer')}
//     />
//   )
// }

function WrongActionButton() {

  // const [isDisabled, setIsDisabled] = useState(true);
  // const [isCorrect, setIsCorrect] = useState(false);

  return (
    <ActionButton 
      buttonText={'Wrong'} 
      isCorrect={true}
      isDisabled={true}
      onPressFunction={() => alert('Wrong answer')}
    />
  )
}

storiesOf('ActionButtonComponents', module)

  .addDecorator(story => <View style={{padding: 23, backgroundColor: 'blue'}}>{story()}</View>)

  // .add('Pick button',() => <Button title={'button'} />)

  // .add('Correct button', () => <CorrectActionButton />)

  .add('Wrong button', () => <WrongActionButton />)