import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import Error from "../../shared/Error";
import About from "./About";
import Swatches from "./Swatches";
import {setSearchQuery} from "../../../actions";
import {connect} from "react-redux";
import Gallery from "./Gallery";

const View = ({character, match, setSearchQuery}) => {
  const {
    name,
    username,
    profile_image: {
      url: {
        medium: image_url
      }
    }
  } = character;

  setSearchQuery(name);

  if (!match) {
    return <Error message={"Match no"} />
  }

  return (
    <div className={'character-view'}>
      <div className={'header'}>
        <div className={'summary'}>
          <button className='right plain'>
            <i className='material-icons right'>star_outline</i>
          </button>
          <h1>{ name }</h1>
          <div className={'attributes'}>
            <div className={'attribute'}>
              <span className="attr-name">Created by </span>
              <Link to={`/${username}`}>@{username}</Link>
            </div>
            {/*<div className={'attribute'}><span className="attr-name">Species:</span> {species || "(Unknown)"}</div>*/}
          </div>
          <div className='tabs'>
            <NavLink to={`${match.url}`} className='tab' activeClassName='active' exact>About</NavLink>
            <NavLink to={`${match.url}/swatches`} className='tab' activeClassName='active'>Swatches</NavLink>
            <NavLink to={`${match.url}/refs`} className='tab' activeClassName='active'>Refs</NavLink>
          </div>
        </div>
        <div className={'profile-image'}>
          <img src={image_url} height={100} alt={ name } />
        </div>
      </div>

      <Switch>
        <Route path={`${match.path}`} exact render={() =>
          <About character={character} />
        } />

        <Route path={`${match.path}/swatches`} render={() =>
          <Swatches character={character} />
        } />

        <Route path={`${match.path}/refs`} render={() =>
          <Gallery character={character} />
        } />
      </Switch>
    </div>
  )
};

export default connect(null, {setSearchQuery})(View)