import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import Search from "./Search";
import { history } from '../../utils/configureStore';

const Toolbar = () => {
  const canGoBack = history.index > 0;
  const canGoForward = history.index < history.length - 1;
  console.log({history});

  return(
    <div className='toolbar'>
      <Button onClick={e => history.goBack()} disabled={!canGoBack}>keyboard_arrow_left</Button>
      <Button onClick={e => history.goForward()} disabled={!canGoForward}>keyboard_arrow_right</Button>
      <Button onClick={e => window.location.reload()}>refresh</Button>
      <Link to='/'><i className='material-icons'>home</i></Link>

      <div className='right'>
        <Search />
      </div>
    </div>
  )
};

export default Toolbar;