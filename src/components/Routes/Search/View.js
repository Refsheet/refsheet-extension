import React from 'react';
import Content from "../../Content";
import CharacterCard from "../../shared/CharacterCard";
import {withNamespaces} from "react-i18next";

const View = ({total_pages, current_page, total_entries, count, characters, t}) => {
  return (
    <div className='character-view'>
      <div className='header short'>
        <div className='summary'>
          <div className='right meta'>
            {t('search.pages', {
              defaultValue: "Page {{current_page}} of {{total_pages}}",
              current_page,
              total_pages
            })}<br/>

            {t('search.total', {
              defaultValue: "{{count}} result",
              count: total_entries
            })}
          </div>
          <h1>{t('search.title', "Search Results")}</h1>
        </div>
      </div>

      { renderResults(characters, t) }
    </div>
  )
};

const renderResults = (characters, t) => {
  if (characters.length === 0)
    return (
      <Content relax>
        <h1>{t('search.no_results', 'No results :(')}</h1>
      </Content>
    );

  return (
    <Content>
      { characters.map(c => <CharacterCard key={c.shortcode} character={c} />)}
    </Content>
  )
};

const translated = withNamespaces('common')(View);

export default translated;