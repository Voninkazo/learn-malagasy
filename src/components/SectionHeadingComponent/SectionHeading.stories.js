import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section Heading', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Shorter section heading', () => (
    <SectionHeading text={'Seen phrases'} />
  ))
  .add('Longer section heading', () => (
    <SectionHeading text={'Select a ctegory from the list'} />
  ));
