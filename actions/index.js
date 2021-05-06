import data from '../src/data/categories.json';

export function getCategoryList() {
  return async dispatch => {
    const categoryList = data.categories;
    dispatch({
      type: 'LOAD_DATA',
      payload: categoryList,
    });
  };
}

export function switchLanguage() {
  return {
    type: 'SWITCH_LANGUAGE',
  };
}

export function getPhrases() {
  return {
    type: 'GET_PHRASES',
  };
}

export function getSeenPhrases(phrases) {
  return {
    type: 'GET_SEEN_PHRASES',
    payload: phrases,
  };
}

export function getLearntPhrases(phrases) {
  return {
    type: 'GET_LEARNT_PHRASES',
    payload: phrases,
  };
}
