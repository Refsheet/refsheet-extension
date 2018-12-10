import React from 'react';
import {setSearchQuery} from "../../../actions";
import {connect} from "react-redux";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Error from "../../shared/Error";
import View from "./View";
import {Query} from "react-apollo";
import Loading from "../../shared/Loading";

const Search = ({setSearchQuery, match: {params}}) => {
  const query = decodeURIComponent(params.query);
  setSearchQuery(query);

  return (
    <Query query={SEARCH_QUERY} variables={{query}}>
      {({loading, error, data}) => {
        if (loading) return <Loading />;
        if(error) return <Error {...error} />;
        return <View {...data.searchForCharacter} />
      }}
    </Query>
  )
};

const SEARCH_QUERY = gql`
  query searchForCharacter($query: String!) {
    searchForCharacter(query: $query) {
      total_pages 
      current_page
      total_entries
      count
      
      characters {
        shortcode
        name
        slug
        username
        
        profile_image {
          url {
            small
            thumbnail
            medium
          }
        }
      }
    }
  }
`;

Search.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired
    })
  }),
  setSearchQuery: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  setSearchQuery
};

export default connect(undefined, mapDispatchToProps)(Search);