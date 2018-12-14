import React from 'react';
import Content from "../../Content";
import CharacterCard from "../../shared/CharacterCard";

const View = ({total_pages, current_page, total_entries, count, characters}) => {
  return (
    <div className='character-view'>
      <div className='header short'>
        <div className='summary'>
          <div className='right meta'>
            Page {current_page} of {total_pages}<br/>
            {total_entries} results
          </div>
          <h1>Search Results</h1>
        </div>
      </div>

      { renderResults(characters) }
    </div>
  )
};

const renderResults = (characters) => {
  if (characters.length === 0)
    return (
      <Content relax>
        <h1>No results :(</h1>
      </Content>
    );

  return (
    <Content>
      { characters.map(c => <CharacterCard key={c.shortcode} character={c} />)}
    </Content>
  )
};

export default View;