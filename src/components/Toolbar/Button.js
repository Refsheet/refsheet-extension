import React from 'react'

const Button = ({onClick, children, title, style}) => {
  return(
    <button onClick={onClick} title={title} style={style}>
      <i className='material-icons'>{children}</i>
    </button>
  )
};

export default Button