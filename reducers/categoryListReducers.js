export default function categoryList(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return action.payload;

    default:
      return state;
  }
}
