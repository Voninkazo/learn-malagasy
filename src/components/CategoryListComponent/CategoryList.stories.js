import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import CategoryList from './CategoryList';

storiesOf('List component', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Shorter category name', () => (
    <CategoryList
      categoryItem={'Food'}
      onPressFunction={() => alert('learn')}
    />
  ))
  .add('Longer category name', () => (
    <CategoryList
      categoryItem={'An unecessary loooooong cat...'}
      onPressFunction={() => alert('learn')}
    />
  ));
