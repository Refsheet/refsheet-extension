import React from 'react'
import {NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import Error from "../../shared/Error";
import About from "./About";
import Swatches from "./Swatches";

const View = ({character, match}) => {
  const {
    name,
    profile_image: {
      url: {
        medium: image_url
      }
    }
  } = character;

  console.log(match);

  if (!match) {
    return <Error message={"Match no"} />
  }

  return (
    <div className={'character-view'}>
      <div className={'header'}>
        <div className={'summary'}>
          <h1>{ name }</h1>
          <div className={'attributes'}>
            <div className={'attribute'}><span className="attr-name">By:</span> @MauAbata</div>
            <div className={'attribute'}><span className="attr-name">Species:</span> Caracal / Snow Leopard</div>
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

        <Route path={`${match.path}/swatches`} exact render={() =>
          <Swatches character={character} />
        } />
      </Switch>
    </div>
  )
};

export default View