import React from 'react'
import {closeLightbox} from "../../actions";
import {connect} from "react-redux";
import Content from "../Content";
import getExtension from '../../extension';
import Button from "../Toolbar/Button";
import {withNamespaces} from "react-i18next";

const Lightbox = ({open, image, closeLightbox, t}) => {
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
          <div className='text strong' title={image.title}>{ image.title || t('image.untitled', "Untitled") }</div>
        </div>
        <div className='no-grow'>
          <Button onClick={e => placeFile()} title={t('image.place', "Place File")}>add_to_queue</Button>
          <Button onClick={e => openFile()} title={t('image.download', "Download & Open")}>cloud_download</Button>
          <div className='divider' />
          <button onClick={e => closeLightbox()} title={t('actions.close', "Close")}>
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

const connected = connect(mapStateToProps, mapDispatchToProps)(Lightbox);
const translated = withNamespaces('common')(connected);

export default translated;