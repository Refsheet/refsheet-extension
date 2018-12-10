import React from 'react';
import Content from "../Content";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <Content relax>
      <h1 className={'loading'}>Loading</h1>
      <Spinner />
    </Content>
  )
};

export default Loading