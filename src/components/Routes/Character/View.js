import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import Error from "../../shared/Error";
import About from "./About";
import Swatches from "./Swatches";
import {setSearchQuery} from "../../../actions";
import {connect} from "react-redux";
import Gallery from "./Gallery";
import {withNamespaces} from "react-i18next";

const View = ({character, match, setSearchQuery, t}) => {
  const {
    name,
    username,
    shortcode,
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
          <button className='right plain' title={t('actions.add_favorite', 'Add Favorite')}>
            <i className='material-icons right'>star_outline</i>
          </button>
          <h1>{ name }</h1>
          <div className={'attributes'}>
            <div className={'attribute'}>
              <div className="attr-name">{t('character.owner_label', "Owner:")}</div>
              <div className="attr-value">
                <Link to={`/${username}`}>@{username}</Link>
              </div>
            </div>
            <div className={'attribute'}>
              <div className="attr-name">ref.st/ </div>
              <div className="attr-value">
                <a href={`https://ref.st/${shortcode}`} title={t('actions.open_in_browser', 'Open in Browser')}
                   target='_blank' rel="external noopener noreferrer">{shortcode}</a>
              </div>
            </div>
          </div>
          <div className='tabs'>
            <NavLink to={`${match.url}`} className='tab' activeClassName='active' exact>{t('character.nav.about', "About")}</NavLink>
            <NavLink to={`${match.url}/swatches`} className='tab' activeClassName='active'>{t('character.nav.swatches', "Swatches")}</NavLink>
            <NavLink to={`${match.url}/refs`} className='tab' activeClassName='active'>{t('character.nav.gallery', "Gallery")}</NavLink>
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

const connected = connect(null, {setSearchQuery})(View);
const translated = withNamespaces('common')(connected);

export default translated;