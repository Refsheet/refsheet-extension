import React from 'react'

const Button = ({onClick, children, title, style, disabled}) => {
  return(
    <button onClick={onClick} title={title} style={style} disabled={disabled}>
      <i className='material-icons'>{children}</i>
    </button>
  )
};

export default Button