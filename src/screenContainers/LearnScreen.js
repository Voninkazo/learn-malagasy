import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {getSeenPhrases, switchLanguage} from '../../actions';
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

export default function LearnScreen({route, navigation}) {
  const isEnglish = useSelector(state => state.isEnglish);
  const categoryList = useSelector(state => state.categoryList);
  const phrases = useSelector(state => state.phrases);
  const seenPhrases = useSelector(state => state.seenPhrases);
  console.log(seenPhrases);

  // const [randomIds, setRandomIds] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [clickBtn, setClickedBtn] = useState(null);
  //console.log(phrases);
  const correct = useRef(null);

  const dispatch = useDispatch();

  const {itemId} = route.params;

  const categoryToDisplay = categoryList.find(i => i.id === itemId);
  // console.log(categoryToDisplay);

  const allPhrasesIds = categoryToDisplay.phrasesIds;

  // function getRandomPhrase() {
  const randomIds =
    allPhrasesIds[Math.floor(Math.random() * allPhrasesIds.length)];
  //console.log(randomePhrasesIds);

  const matchedIds = phrases.filter(phr =>
    phr.id.includes(randomIds.substring(0, 3)),
  );
  // console.log(matchedIds);
  const phraseToDisplay = matchedIds.find(phr => phr.id === randomIds);
  //console.log(phraseToDisplay);

  const otherOptions = matchedIds.filter(id => id.id !== phraseToDisplay.id);
  //console.log(final);

  const random1 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random2 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  const random3 = otherOptions[Math.floor(Math.random() * otherOptions.length)];
  //console.log(random1);

  const answersToDisplay = [phraseToDisplay, random1, random2, random3];
  //console.log(answersToDisplay);

  const shuffledAnswers = answersToDisplay.sort(function () {
    return 0.5 - Math.random();
  });

  function checkAnswer(item) {
    const correctAnswer = phraseToDisplay.name.en;
    // console.log(item);
    //console.log(correctAnswer);
    if (item === correctAnswer) {
      alert(true);
      setIsAnswerCorrect(true);
      setIsDisabled(true);
      setClickedBtn(item);
      // correct.current === 'Correct';
    } else {
      setIsAnswerCorrect(false);
      setIsDisabled(true);
      alert(false);
    }
  }

  const isFocused = useIsFocused();
  useIsFocused(() => {
    dispatch(getSeenPhrases(phraseToDisplay));
    console.log('screen');
  }, [phraseToDisplay, isFocused]);

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
        <PhraseTextarea editable={false} phrase={phraseToDisplay.name.mg} />
        <SectionHeading
          text={isEnglish ? 'Pick a solution:' : 'Mifidiana valiny iray:'}
        />
        {shuffledAnswers.map(answer => (
          <List
            isEnglish={isEnglish}
            buttonText={
              isDisabled && !isAnswerCorrect
                ? 'Wrong'
                : isDisabled && isAnswerCorrect
                ? 'Correct'
                : 'Pick'
            }
            item={answer.name.en}
            keyId={answer.id}
            onPressFunction={() => checkAnswer(answer.name.en)}
            isCorrect={isAnswerCorrect}
            isDisabled={isDisabled}
            ref={correct}
            //clickBtn={clickBtn}
          />
        ))}
        <Button
          disabled={false}
          buttonText="Next"
          //onPressFunction={() => handleClick()}
        />
      </View>
    </ScrollView>
  );
}
