import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { apolloReducer } from 'apollo-cache-redux'
import search from "./search";
import lightbox from './lightbox';

export default (history) => combineReducers({
  router: connectRouter(history),
  apollo: apolloReducer,
  search,
  lightbox
})