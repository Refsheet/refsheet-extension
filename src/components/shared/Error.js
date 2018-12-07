import React from 'react';
import Content from "../Content";

const Error = ({message}) => {
  return (
    <Content relax>
      <h1 className={'error'}>Oops :(</h1>
      <p>{message}</p>
    </Content>
  )
};

export default Error