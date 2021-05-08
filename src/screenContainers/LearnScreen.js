import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {
  getCategoryList,
  getPhrases,
  getSeenPhrases,
  switchLanguage,
} from '../../actions';
import List from '../components/ListComponent/List';
import Button from '../components/NextButtonComponent/Button';
import PhraseTextarea from '../components/PhraseTextarea/PhraseTextArea';
import SectionHeading from '../components/SectionHeadingComponent/SectionHeading';
import ToolBar from '../components/ToolBarComponent/ToolBar';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 107,
  },
});

export default function LearnScreen({route}) {
  const isEnglish = useSelector(state => state.isEnglish);
  const categoryList = useSelector(state => state.categoryList);
  const phrases = useSelector(state => state.phrases);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const {itemId} = route.params;

  useEffect(() => {
    dispatch(getPhrases());
    dispatch(getCategoryList());
  }, []);

  const categoryToDisplay = categoryList.find(i => i.id === itemId);

  const allPhrasesIds = categoryToDisplay.phrasesIds;
  const randomIds =
    allPhrasesIds[Math.floor(Math.random() * allPhrasesIds.length)];

  const matchedIds = phrases.filter(phr =>
    phr.id.includes(randomIds.substring(0, 3)),
  );
  const phraseObjectToDisplay = matchedIds.find(phr => phr.id === randomIds);

  const otherOptions = matchedIds.filter(
    id => id.id !== phraseObjectToDisplay.id,
  );

  const random1 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random2 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random3 = otherOptions[Math.floor(Math.random() * otherOptions.length)];

  const answersToDisplay = [phraseObjectToDisplay, random1, random2, random3];

  const shuffledAnswers = answersToDisplay.sort(function () {
    return 0.5 - Math.random();
  });

  function checkAnswer(item) {
    setIsDisabled(true);
    setShowNextBtn(true);
    const correctAnswer = phraseObjectToDisplay.name.en;
    if (item === correctAnswer) {
      alert(true);
      setIsAnswerCorrect(true);
    } else {
      alert(false);
      setIsAnswerCorrect(false);
    }
  }

  function handleClick() {
    setIsAnswerCorrect(false);
    setShowNextBtn(false);
    setIsDisabled(false);
  }

  const isFocused = useIsFocused();
  useIsFocused(() => {
    const seenWordsAndPhrases = [...seenPhrases, phraseObjectToDisplay];
    dispatch(getSeenPhrases(seenWordsAndPhrases));
  }, [phraseObjectToDisplay, isFocused]);

  return (
    <ScrollView>
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
        <PhraseTextarea
          editable={false}
          phrase={phraseObjectToDisplay?.name.mg}
        />
        <SectionHeading
          text={isEnglish ? 'Pick a solution:' : 'Mifidiana valiny iray:'}
        />

        {shuffledAnswers.map(answer => (
          <List
            isEnglish={isEnglish}
            buttonText={
              isAnswerCorrect && isDisabled
                ? 'Correct'
                : !isAnswerCorrect && isDisabled
                ? 'Wrong'
                : 'Pick'
            }
            item={answer.name.en}
            keyId={answer.id}
            isCorrect={isAnswerCorrect}
            isDisabled={isDisabled}
            onPressFunction={() => checkAnswer(answer.name.en)}
          />
        ))}
        {showNextBtn && (
          <Button
            disabled={false}
            buttonText="Next"
            onPressFunction={() => handleClick()}
          />
        )}
      </View>
    </ScrollView>
  );
}
