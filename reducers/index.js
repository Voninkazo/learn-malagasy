import {combineReducers} from 'redux';
import categoryList from './categoryListReducers';
import isEnglish from './switchLanguageReducer';
import phrases from './phrasesReducers';
import seenPhrases from './seenPhrasesReducers';
import learntPhrases from './learntPhrasesReducers';

export default combineReducers({
  categoryList,
  isEnglish,
  phrases,
  seenPhrases,
  learntPhrases,
});
