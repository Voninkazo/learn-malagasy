import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {switchLanguage} from '../../actions';
import List from '../components/ListComponent/List';
import PhraseTextarea from '../components/PhraseTextarea/PhraseTextArea';
import SectionHeading from '../components/SectionHeadingComponent/SectionHeading';
import ToolBar from '../components/ToolBarComponent/ToolBar';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingRight: 23,
  },
});

export default function LearnScreen() {
  const isEnglish = useSelector(state => state.isEnglish);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ToolBar
        isHomeScreen={false}
        malagasySwitcher="MA"
        englishSwitcher="EN"
        isEnglish={isEnglish}
        onPressFunction={() => dispatch(switchLanguage())}
      />
      <View style={styles.container}>
        <SectionHeading text={isEnglish ? 'Category:' : 'Sokajy:'} />
        <SectionHeading text={isEnglish ? 'The phrase:' : 'Fehezan-teny:'} />
        <PhraseTextarea editable={false} phrase="Dimy" />
        <SectionHeading
          text={isEnglish ? 'Pick a solution:' : 'Mifidiana valiny iray:'}
        />
        {/* <List listsToDisplay={['two', 'three', 'four', 'five']} /> */}
      </View>
    </SafeAreaView>
  );
}
