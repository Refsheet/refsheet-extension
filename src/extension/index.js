import Extension from './interfaces/Extension'
import Photoshop from './interfaces/Photoshop'
import Android from "./interfaces/Android";

function getExtension() {
  if (window && window.parent && window.parent.CSInterface)
    return new Photoshop();
  if (window && window.Android)
    return new Android();
  else
    return new Extension();
}

export default getExtension;