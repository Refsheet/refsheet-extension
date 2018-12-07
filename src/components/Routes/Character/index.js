import React from 'react'
import PropTypes from 'prop-types'
import {Query} from "react-apollo";
import gql from 'graphql-tag';
import Error from "../../shared/Error";
import View from "./View";

const Character = ({match}) => {
  const { params } = match;

  const {
    username,
    character
  } = params;

  return (
    <Query query={GET_CHARACTER} variables={{username, character}}>
      {({loading, error, data}) => {
        if (loading) return <p>Loading...</p>;
        if(error) return <Error {...error} />;
        return <View character={data.getCharacterByUrl} match={match} />
      }}
    </Query>
  )
};

const GET_CHARACTER = gql`
  query getCharacterProfile($username: String!, $character: String!) {
    getCharacterByUrl(username: $username, slug: $character) {
      name
      special_notes_html
      slug
      username
      
      swatches {
        id
        name
        color
        notes
      }
      
      profile_image {
        url {
          medium
        }
      }
    }
  }
`;

Character.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired
    })
  })
};

export default Character;