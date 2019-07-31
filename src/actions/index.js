// we'll need axios
import axios from "axios";
export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

 

export const getCharacters = () => {
    return function(dispatch) {
        dispatch({type: FETCH_CHARACTERS_START});
        axios
        .get('https://swapi.co/api/people/') 
        .then(result => {
            dispatch({
                type: FETCH_CHARACTERS_SUCCESS,
                payload: result.data.results
            })
        })
            
        .catch(error => 
            dispatch({
                type: FETCH_CHARACTERS_FAILURE,
                payload: error
            }));
    };
};