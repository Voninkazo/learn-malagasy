import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('Section Heading', module)
  .addDecorator(story => <View>{story()}</View>)

  .add('Section heading component', () => <SectionHeading text={'category'} />);
