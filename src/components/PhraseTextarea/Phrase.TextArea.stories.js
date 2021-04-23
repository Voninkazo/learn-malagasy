import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import PhraseTextArea from './PhraseTextArea';


function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhraseTextArea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}
storiesOf('PhraseTextArea', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('Editable input', () => <Edit />)
  .add('Uneditable phrase', () => (
    <PhraseTextArea phrase={'Roa ambin\' ny folo'} editable={false} />
  ))
  .add('Ueditable and longer phrase', () => (
    <PhraseTextArea
      phrase={
        'You have answered all the questions in this category'
      }
      editable={false}
    />
  ));
