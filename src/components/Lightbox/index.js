import React from 'react'
import {closeLightbox} from "../../actions";
import {connect} from "react-redux";
import Content from "../Content";

const Lightbox = ({open, image, closeLightbox}) => {
  console.log(open, image);
  if (!open) return null;

  return (
    <div className='lightbox'>
      <div className='toolbar flex'>
        <div className='grow'>
          <div className='text strong'>{ image.title || "Untitled" }</div>
        </div>
        <div className='no-grow'>
          <button onClick={e => closeLightbox()}>
            <i className='material-icons'>close</i>
          </button>
        </div>
      </div>
      <Content style={{padding: 0}}>
        <img src={image.url.medium} alt={image.title} />
      </Content>
    </div>
  )
};

const mapStateToProps = ({lightbox}) => ({...lightbox});

const mapDispatchToProps = {
  closeLightbox
};

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);