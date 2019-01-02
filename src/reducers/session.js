import * as Actions from '../actions'

const initialState = {};

const session = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SESSION:
      return Object.assign({}, state, action.session);

    default:
      return state
  }
};

export default session;