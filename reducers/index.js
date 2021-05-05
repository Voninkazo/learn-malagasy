import {combineReducers} from 'redux';
import categoryList from './categoryListReducers';
import isEnglish from './switchLanguageReducer';
import phrases from './phrasesReducers';
import seenPhrases from './seenPhrasesReducers';

export default combineReducers({
  categoryList,
  isEnglish,
  phrases,
  seenPhrases,
});
