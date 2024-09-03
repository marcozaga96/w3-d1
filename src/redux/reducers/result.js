import { GET_RESULTS } from "../antions";

const initialState = {
  results: [],
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default resultsReducer;
