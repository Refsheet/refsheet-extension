import ColorSwatch from "../../shared/ColorSwatch";
import Content from "../../Content";
import React from "react";

const Swatches = ({character}) => {
  const {
    swatches
  } = character;

  return (
    <Content>
      { swatches.map((swatch) => (<ColorSwatch {...swatch} key={swatch.id} />))}
      { swatches.length === 0 && <p>Nothing here :(</p> }
    </Content>
  )
};

export default Swatches