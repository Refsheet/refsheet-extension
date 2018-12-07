import Extension from './interfaces/Extension'
import Photoshop from './interfaces/Photoshop'

function getExtension() {
  if (window && window.parent && window.parent.CSInterface)
    return new Photoshop();
  else
    return new Extension();
}

export default getExtension;