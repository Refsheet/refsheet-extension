import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom'
import Search from "./Search";

const Toolbar = () => {
  return(
    <div className='toolbar'>
      <Link to='/'><i className='material-icons'>home</i></Link>
      <Button onClick={e => window.location.reload()}>refresh</Button>

      <div className='right'>
        <Search />
      </div>
    </div>
  )
};

export default Toolbar;