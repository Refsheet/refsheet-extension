import * as Actions from '../actions'

const initialState = {
  open: false,
  image: null
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_LIGHTBOX:
      return Object.assign({}, state, {
        open: true,
        image: action.image
      });

    case Actions.CLOSE_LIGHTBOX:
      return Object.assign({}, state, {
        open: false,
        image: null
      });

    default:
      return state
  }
};

export default search;