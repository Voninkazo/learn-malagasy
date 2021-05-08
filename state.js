import data from './src/data/phrases.json';
import categroyData from './src/data/categories.json';
export default {
  categoryList: categroyData.categories,
  isEnglish: true,
  phrases: data.phrases,
  seenPhrases: [],
  learntPhrases: [],
};
