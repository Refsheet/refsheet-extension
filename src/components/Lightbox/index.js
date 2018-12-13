import React from 'react'
import {closeLightbox} from "../../actions";
import {connect} from "react-redux";
import Content from "../Content";
import getExtension from '../../extension';
import Button from "../Toolbar/Button";

const Lightbox = ({open, image, closeLightbox}) => {
  const ext = getExtension();
  if (!open) return null;

  const placeFile = () => {
    ext.placeFile(image.url.large, image.title)
      .then(console.log)
      .catch(console.error)
  };

  const openFile = () => {
    ext.openFile(image.url.large)
      .then(console.log)
      .catch(console.error)
  };

  return (
    <div className='lightbox'>
      <div className='toolbar flex'>
        <div className='grow'>
          <div className='text strong' title={image.title}>{ image.title || "Untitled" }</div>
        </div>
        <div className='no-grow'>
          <Button onClick={e => placeFile()} title="Place File">add_to_queue</Button>
          <Button onClick={e => openFile()} title="Download & Open">cloud_download</Button>
          <div className='divider' />
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