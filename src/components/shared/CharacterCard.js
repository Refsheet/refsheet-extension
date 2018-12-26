import {Link} from "react-router-dom";
import React from "react";
import {withNamespaces} from "react-i18next";

const CharacterCard = ({character, t}) => (
  <Link
    to={`/${character.username}/${character.slug}`}
    className='character-card'
  >
    <div className='name'>{ character.name }</div>
    <div className='user'>{t('character.owner_label', "Owner:")} @{ character.username }</div>
    <div className='shortcode'>ref.st/{ character.shortcode }</div>
    <div className='image'>
      <img alt={ character.name } src={ character.profile_image.url.thumbnail } />
    </div>
  </Link>
);

const translated = withNamespaces('common')(CharacterCard);

export default translated