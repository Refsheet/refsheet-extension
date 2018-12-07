import React from 'react';
import Main from "./Main";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { ApolloProvider } from 'react-apollo'

import store, { history } from '../utils/configureStore'
import client from '../utils/configureApollo'

const App = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <Main {...props} />
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
