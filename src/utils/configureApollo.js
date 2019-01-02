import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const HOST_PROD = 'https://refsheet.net';
const HOST_DEV = 'http://dev1.refsheet.net:5000';
let HOST;

if (window.location.hash === "#dev") {
  HOST = HOST_DEV;
} else {
  HOST = HOST_PROD;
}

const httpLink = createHttpLink({
  uri: `${HOST}/graphql`,
  credentials: 'include'
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