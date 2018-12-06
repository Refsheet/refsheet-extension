import React from 'react'
import Button from "./Button";

const Toolbar = ({}) => {
  return(
    <div className='toolbar'>
      <Button onClick={e => window.location.reload()}>home</Button>
      <Button onClick={e => window.location.reload()}>refresh</Button>

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