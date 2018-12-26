import Content from "../../Content";
import React from "react";
import {withNamespaces} from "react-i18next";

const About = ({character, t}) => {
  const {
    special_notes_html
  } = character;

  return (
    <Content>
      <p dangerouslySetInnerHTML={{__html: special_notes_html || t('content.empty', "Nothing here :(")}} />
    </Content>
  )
};

const translated = withNamespaces('common')(About);

export default translated