import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'

const history = createBrowserHistory();

const initialState = {
  search: {
    query: ''
  },
  lightbox: {
    open: false,
    image: null
  }
};

const store = createStore(
  createRootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export { history };
export default store;