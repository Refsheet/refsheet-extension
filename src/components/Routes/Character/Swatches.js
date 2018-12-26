import ColorSwatch from "../../shared/ColorSwatch";
import Content from "../../Content";
import React from "react";
import {withNamespaces} from "react-i18next";

const Swatches = ({character, t}) => {
  const {
    swatches
  } = character;

  return (
    <Content>
      { swatches.map((swatch) => (<ColorSwatch {...swatch} key={swatch.id} />))}
      { swatches.length === 0 && <p>{t('content.empty', 'Nothing here :(')}</p> }
    </Content>
  )
};

const translated = withNamespaces('common')(Swatches);

export default translated