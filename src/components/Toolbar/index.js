import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import Search from "./Search";
import { history } from '../../utils/configureStore';
import {connect} from "react-redux";
import c from 'classnames';

const Toolbar = ({currentUser}) => {
  return(
    <div className='toolbar-container'>
      <nav className='toolbar flex'>
        <div className='no-grow'>
          <Button onClick={e => history.goBack()}>keyboard_arrow_left</Button>
          <Link to='/'><i className='material-icons'>home</i></Link>
        </div>

        <div className='grow'>
          <Search />
        </div>

        <div className='right no-grow'>
          <Link to='/favorites' disabled={!currentUser} className={c({disabled: !currentUser})}>
            <i className='material-icons'>star</i>
          </Link>

          { currentUser
          ? <Link to='/account' disabled={true} className={'disabled'}><i className='material-icons'>person</i></Link>
          : <Link to='/login' disabled={true} className={'disabled'}><i className='material-icons'>person_outline</i></Link> }
        </div>
      </nav>
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Toolbar);