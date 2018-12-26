import React from 'react';
import Main from "./Main";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { ApolloProvider } from 'react-apollo'
import { I18nextProvider } from 'react-i18next'

import store, { history } from '../utils/configureStore'
import client from '../utils/configureApollo'
import i18n from "../utils/i18n";

const App = (props) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider client={client}>
          <Main {...props} />
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>
);

export default App;
