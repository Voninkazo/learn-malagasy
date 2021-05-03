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

export default function LearnScreen({route, navigation}) {
  const isEnglish = useSelector(state => state.isEnglish);
  const categoryList = useSelector(state => state.categoryList);
  const phrases = useSelector(state => state.phrases);
  //console.log(phrases);

  const dispatch = useDispatch();

  const {itemId} = route.params;

  const categoryToDisplay = categoryList.find(i => i.id === itemId);
  // console.log(categoryToDisplay);

  const allPhrasesIds = categoryToDisplay.phrasesIds;

  const randomePhrasesIds =
    allPhrasesIds[Math.floor(Math.random() * allPhrasesIds.length)];
  //console.log(randomePhrasesIds);

  const phraseToDisplay = phrases.find(phr =>
    phr.id.includes(randomePhrasesIds),
  );
  //console.log(phraseToDisplay);

  const matchedIds = phrases.filter(phr =>
    phr.id.includes(randomePhrasesIds.substring(0, 3)),
  );
  //console.log(matchedIds);
  const otherOptions = matchedIds.filter(id => id.id !== phraseToDisplay.id);
  //console.log(final);

  const random1 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random2 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random3 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  //console.log(random1);

  const answersToDisplay = [phraseToDisplay, random1, random2, random3];
  console.log(answersToDisplay);

  const shuffledAnswers = answersToDisplay.sort(function () {
    return 0.5 - Math.random();
  });
  // console.log(shuffledAnswers);

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
        <SectionHeading
          text={
            isEnglish
              ? `Category: ${categoryToDisplay.name.en}`
              : `Sokajy: ${categoryToDisplay.name.mg}`
          }
        />
        <SectionHeading text={isEnglish ? 'The phrase:' : 'Fehezan-teny:'} />
        <PhraseTextarea editable={false} phrase={phraseToDisplay.name.mg} />
        <SectionHeading
          text={isEnglish ? 'Pick a solution:' : 'Mifidiana valiny iray:'}
        />
        {shuffledAnswers.map(answer => (
          <List
            isEnglish={isEnglish}
            buttonText={isEnglish ? 'Pick' : 'Fidio'}
            item={answer.name.en}
            keyId={answer.id}
            onPressFunction={() => alert('Pick')}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
