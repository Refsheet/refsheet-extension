import React from 'react';
import Content from "../Content";
import Spinner from "./Spinner";
import {withNamespaces} from "react-i18next";

const Loading = ({t}) => {
  return (
    <Content relax>
      <h1 className={'loading'}>{t('status.loading', 'Loading...')}</h1>
      <Spinner />
    </Content>
  )
};

const translated = withNamespaces('common')(Loading);

export default translated