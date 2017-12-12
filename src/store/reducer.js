const initialState = {
  cardNr: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT_CARD':
      return {
        ...state,
        cardNr: state.cardNr + 1
      }
    case 'PREV_CARD':
      return {
        ...state,
        cardNr: state.cardNr - 1
      }
    default:
      return state;
  }
};

export default reducer;
