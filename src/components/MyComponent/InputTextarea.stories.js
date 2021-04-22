
import * as React from 'react';
import { View } from 'react-native';
import {useState} from 'react';

import { storiesOf } from '@storybook/react-native';
import InputTextarea from './InputTextarea';

 function Change() {
    const [inputValue, setInputValue] = useState('');
    return (
      <InputTextarea inputValue={inputValue} setInputValue={setInputValue} placeholder={'Enter here'} />
    ) 
}
  
storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Editable textarea', () =>  <Change  />)
   