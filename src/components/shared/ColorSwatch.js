import React from 'react';
import getExtension from '../../extension'

const ColorSwatch = ({color, style, name}) => {
  const ext = getExtension();

  const setForeground = () => {
    ext.setForegroundColor(color)
      .catch(e => console.error(e))
  };

  const setBackground = () => {
    ext.setBackgroundColor(color)
      .catch(e => console.error(e))
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (e.which && e.which !== 1) {
      setBackground()
    } else {
      setForeground()
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setBackground();
  };

  return (
    <div
      className='color-swatch'
      style={{...style, backgroundColor: color}}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      title={`${color} - ${name}`}
    >
      { name && <div className='title'>{name}</div> }
    </div>
  )
};

export default ColorSwatch;