const initialState = {
  job: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TO-FAVOURITES":
      return {
        ...state,
        job: {
          ...state.job,
          content: state.job.content.concat(action.payload),
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        job: {
          ...state.job,
          content: state.job.content.filter((i) => i !== action.payload),
        },
      };

    default: {
      return state;
    }
  }
};
export default mainReducer;
