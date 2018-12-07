import ColorSwatch from "../../shared/ColorSwatch";
import Content from "../../Content";
import React from "react";

const About = ({character}) => {
  const {
    special_notes_html
  } = character;

  return (
    <Content>
      <p dangerouslySetInnerHTML={{__html: special_notes_html || "Nothing here :("}} />
    </Content>
  )
};

export default About