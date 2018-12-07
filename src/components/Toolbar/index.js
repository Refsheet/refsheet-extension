import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'

const Toolbar = ({}) => {
  return(
    <div className='toolbar'>
      <Link to='/'><i className='material-icons'>home</i></Link>
      <Button onClick={e => window.location.reload()}>refresh</Button>
      <Link to='/mauabata/akhet'>Akhet</Link>

      <div className='right'>
        <div className='input-container with-icon'>
          <input id='search' type='search' placeholder='Search...' />
          <label htmlFor='search'>
            <i className='material-icons'>search</i>
          </label>
        </div>
      </div>
    </div>
  )
};

export default Toolbar;