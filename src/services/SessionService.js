import superagent from 'superagent';
import client, { HOST } from '../utils/configureApollo'
import gql from "graphql-tag";

const SESSION_PATH = `${HOST}/session.json`;

const csrf = function() {
  return {
    'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
  }
};

const SESSION_ARGS = `
  nsfwOk
  locale
  timeZone
  sessionId
  
  currentUser {
    username
    name
    avatar_url
  }
`;

const SessionService = {
  login: function(username, password, remember = true) {
    return new Promise((resolve, reject) => {
      client
        .mutate({
          mutation: gql`
            mutation createSession($username: String!, $password: String!, $remember: Boolean!) {
              createSession(username: $username, password: $password, remember: $remember) {
                ${SESSION_ARGS}
              }
            }
          `,
          variables: {
            username,
            password,
            remember
          }
        })
        .then((data) => {
          if (data.data) {
            resolve(data.data.createSession);
          } else {
            console.warn({data});
            resolve(null);
          }
        })
        .catch(reject)
    })
  },

  logout: function() {
    return new Promise((resolve, reject) => {
      client
        .mutate({
          mutation: gql`
            mutation {
              destroySession {
                ${SESSION_ARGS}
              }
            }
          `
        })
        .then(data => {
          if (data.data) {
            resolve(data.data.destroySession);
          } else {
            console.warn({data});
            resolve(null);
          }
        })
        .catch(reject)
    });
  },

  set: function(params) {
    return superagent
      .put(SESSION_PATH)
      .set(csrf())
      .send(params)
  },

  get: function() {
    return new Promise((resolve, reject) => {
      client
        .query({
          query: gql`
            query getSession {
              getSession {
                ${SESSION_ARGS}
              }
            }
          `
        })
        .then((data) => {
          if (data.data) {
            resolve(data.data.getSession);
          } else {
            console.warn({data});
            resolve(null);
          }
        })
        .catch(reject)
    })
  }
};

// HACK: Exposing this module for debugging raisins.
window.__SESSION = SessionService;

export default SessionService