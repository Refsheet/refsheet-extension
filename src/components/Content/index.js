import React from 'react'
import c from 'classnames'

const Content = ({children, relax, className}) => {
  return (
    <div className={c('content', className, {relax})}>
      {children}
    </div>
  )
};

export default Content