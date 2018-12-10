import React from "react";
import Content from "../../Content";
import ContainerDimensions from 'react-container-dimensions'
import JustifiedLayout from 'react-justified-layout'

const Gallery = ({character}) => {
  const {
    images
  } = character;

  function toPx(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  const renderImage = (image) => (
    <div className={'gallery-image'} key={image.id} style={{
      width: image.size.small.width,
      height: image.size.small.height
    }}>
      { image.nsfw
      ? <div className='nsfw'>
          <i className='material-icons'>remove_circle_outline</i>
          <div>Click to Show NSFW</div>
        </div>
      : <img src={image.url.small} alt={image.caption} /> }
    </div>
  );

  // TODO - update to use fancy scrollbars and remove odd width.

  return (
    <Content style={{ padding: 0 }}>
      <ContainerDimensions>
        { ({width}) =>
          <JustifiedLayout
            targetRowHeight={100}
            containerWidth={width - 10 - toPx(0.5)}
            containerPadding={toPx(0.5)}
            boxSpacing={toPx(0.5)}
          >
            { images.map(renderImage)}
          </JustifiedLayout> }
      </ContainerDimensions>
      { images.length === 0 && <p>Nothing here :(</p> }
    </Content>
  )
};

export default Gallery