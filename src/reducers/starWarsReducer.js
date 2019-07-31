/* we need our action types here*/ "../actions";
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL
} from '../actions';

const initialState = {
  characters: [],
  error: null,
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
      case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        starWars: action.payload,
        isFetching: true,
        error: ""
      };
      case FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
