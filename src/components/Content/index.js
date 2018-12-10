import React from 'react'
import c from 'classnames'

const Content = ({children, relax, className, style}) => {
  return (
    <div className={c('content', className, {relax})} style={style}>
      {children}
    </div>
  )
};

export default Content