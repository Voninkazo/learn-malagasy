import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import LanguageSwitcher from './LanguageSwitcher';

storiesOf('Language Switcher Component', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Language Switcher', () => (
    <LanguageSwitcher
      englishSwitcher={'EN'}
      malagasySwitcher={'MA'}
      isEnglish={true}
      onPressFunction={() => alert('Swicthed language')}
    />
  ));
