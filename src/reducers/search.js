import * as Actions from '../actions'

const initialState = {
  query: ""
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });

    default:
      return state
  }
};

export default search;