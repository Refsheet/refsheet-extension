import {Link} from "react-router-dom";
import React from "react";

const CharacterCard = ({character}) => (
  <Link
    to={`/${character.username}/${character.slug}`}
    className='character-card'
  >
    <div className='name'>{ character.name }</div>
    <div className='user'>By: @{ character.username }</div>
    <div className='shortcode'>ref.st/{ character.shortcode }</div>
    <div className='image'>
      <img alt={ character.name } src={ character.profile_image.url.thumbnail } />
    </div>
  </Link>
);

export default CharacterCard