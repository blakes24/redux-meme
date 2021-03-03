const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MEME':
      return { ...state, memes: [ ...state.memes, action.payload ] };

    case 'DELETE_MEME':
      const filteredMemes = state.memes.filter((meme) => meme.id !== action.payload);
      return { ...state, memes: filteredMemes };

    default:
      return state;
  }
}

export default rootReducer;
