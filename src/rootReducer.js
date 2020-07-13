const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "ADD_MEME":
      return { ...state, memes: [...state.memes, action.payload.meme] };

    case "DELETE_MEME":
      const tempMemes = state.memes.filter(meme => meme.id !== action.payload.id);
      return { ...state, memes: tempMemes };

    default:
      return state;
  }
}

export default rootReducer;