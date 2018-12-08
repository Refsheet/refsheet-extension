import { createMemoryHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'

const history = createMemoryHistory();

const initialState = {
  search: {
    query: ''
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