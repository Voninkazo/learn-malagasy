import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import List from './List';

storiesOf('List Component', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Category List', () => (
    <List
      heading={'Select a category:'}
      isEnglish={true}
      buttonText={'Learn'}
      item={'cat'}
      keyId={'key'}
      isCorrect={false}
      isDisabled={false}
      onPressFunction={() => alert('learn')}
    />
  ));
