import React from 'react'
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {setSearchQuery} from "../../actions";

const Search = ({push, setSearchQuery, query, style, inputStyle}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    push('/search/' + encodeURIComponent(query));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <form className='input-container with-icon' onSubmit={handleSearch} style={style}>
      <input id='search' name='q' type='search' placeholder='Search...' onChange={handleChange} value={query} style={inputStyle} onFocus={e => e.target.select()} />
      <label htmlFor='search'>
        <i className='material-icons'>search</i>
      </label>
    </form>
  )
};

const mapStateToProps = ({search}) => ({
  query: search.query
});

const mapDispatchToProps = {
  push,
  setSearchQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)