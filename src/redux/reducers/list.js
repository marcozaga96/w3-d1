import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../antions";

const initialState = {
  content: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,

        content: state.content.filter((i) => i !== action.payload),
      };

    default: {
      return state;
    }
  }
};
export default mainReducer;
