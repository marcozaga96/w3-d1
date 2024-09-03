export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_RESULTS = "GET_RESULTS";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data.company_name,
  };
};
export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i,
  };
};
export const getResultsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
