import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import Search from "./Search";
import { history } from '../../utils/configureStore';
import {connect} from "react-redux";
import c from 'classnames';
import {withNamespaces} from "react-i18next";
import getExtension from "../../extension";

const Toolbar = ({currentUser, t}) => {
  const ext = getExtension();

  return(
    <div className='toolbar-container'>
      <nav className='toolbar flex'>
        <div className='no-grow'>
          { ext.MenuSupported && <Button onClick={e => ext.openMenu()} title={t('nav.manu', "Menu")}>menu</Button> }
          {ext.BackSupported || <Button onClick={e => history.goBack()} title={t('nav.back', 'Back')}>keyboard_arrow_left</Button> }

          <Link to='/' title={t('nav.home', 'Home')}><i className='material-icons'>home</i></Link>
        </div>

        <div className='grow'>
          <Search />
        </div>

        <div className='right no-grow'>
          <Link to='/favorites' disabled={!currentUser} className={c({disabled: !currentUser})} title={t('nav.favorites', "Favorites")}>
            <i className='material-icons'>star</i>
          </Link>

          { currentUser
          ? <Link to='/account' disabled={true} className={'disabled'} title={t('nav.account', 'Account')}>
              <i className='material-icons'>person</i>
          </Link>

          : <Link to='/login' title={t('nav.login', 'Log In')}>
              <i className='material-icons'>person_outline</i>
          </Link> }
        </div>
      </nav>
    </div>
  )
};

const mapStateToProps = (state) => ({
  session: state.session,
  currentUser: state.session.currentUser
});

const connected = connect(mapStateToProps)(Toolbar);
const translated = withNamespaces('common')(connected);

export default translated;