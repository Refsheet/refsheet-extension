import * as Actions from '../actions'

const initialState = {
  session: {}
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SESSION:
      return Object.assign({}, state, {
        session: action.session
      });

    default:
      return state
  }
};

export default session;