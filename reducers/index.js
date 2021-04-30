import {combineReducers} from 'redux';
import categoryList from './categoryListReducers';
import isEnglish from './switchLanguageReducer';

export default combineReducers({
  categoryList,
  isEnglish,
});
