export default function learntPhrases(state = [], action) {
  switch (action.type) {
    case 'GET_LEANRT_PHRASES':
      return action.payload;

    default:
      return state;
  }
}
