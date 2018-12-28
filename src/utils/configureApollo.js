import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const HOST = 'https://refsheet.net';
// const HOST = 'http://dev.refsheet.net:5000';

const httpLink = createHttpLink({
  uri: `${HOST}/graphql`,
  credentials: 'same-origin'
});

const csrf = document.getElementsByName('csrf-token')[0] || {};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'X-CSRF-Token': csrf.content,
      'Accept': 'application/json'
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export { HOST };
export default client;