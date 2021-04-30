import data from '../src/data/categories.json';

export function getCategoryList() {
  return async dispatch => {
    const categoryList = data['categories'];

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
