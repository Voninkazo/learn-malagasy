import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ListItem from './ListItem';

storiesOf('List Item component', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Shorter item', () => (
    <ListItem
      item={'Food'}
      onPressFunction={() => alert('learn')}
      text={'Correct'}
      isCorrect={true}
      isDisabled={true}
      itemId={'btn'}
      ref={'ref'}
    />
  ))
  .add('Longer item', () => (
    <ListItem
      item={'An unecessary loooooong cat...'}
      onPressFunction={() => alert('learn')}
      text={'Wrong'}
      isDisabled={true}
      isCorrect={false}
      itemId={'btn'}
      ref={'ref'}
    />
  ));
