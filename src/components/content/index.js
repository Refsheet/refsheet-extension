import React from 'react'
import c from 'classnames'

const Content = ({children, relax}) => {
  return (
    <div className={c('content', {relax})}>
      {children}
    </div>
  )
};

export default Content