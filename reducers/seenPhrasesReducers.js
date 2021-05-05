export default function seenPhrases(state = [], action) {
  switch (action.type) {
    case 'GET_SEEN_PHRASES':
      return action.payload;

    default:
      return state;
  }
}
