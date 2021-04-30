export default function isEnglish(state = true, action) {
  switch (action.type) {
    case 'SWITCH_LANGUAGE':
      return !state;
    default:
      return state;
  }
}
