import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import List from './List';
import Categories from '../../data/categories.json';

let categories = Categories['categories'];

storiesOf('List Component', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Category List', () => (
    <List
      heading={'Select a category:'}
      isEnglish={true}
      listsToDisplay={categories}
      onPressFunction={() => alert('learn')}
      buttonText={'Learn'}
      itemId={'id'}
      item={'cat'}
      keyId={'key'}
      isCorrect={false}
    />
  ));
