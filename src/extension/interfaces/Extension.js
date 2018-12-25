import config from '../../config.json'

class Extension {
  static ANDROID = 'android';
  static PHOTOSHOP = 'photoshop';

  constructor() {
    window.__EXTENSION = this;
  }

  // Document Things

  getOpenDocumentName() {
    return this.noop()
  }

  setForegroundColor() {
    return this.noop()
  }

  downloadFile(url) {
    return this.noop()
  }

  openFile(url) {
    return this.noop()
  }

  placeFile(url) {
    return this.noop()
  }

  readConfig() {
    return this.noop()
  }

  writeConfig(config) {
    return this.noop()
  }

  // Extension Metadata

  getVersion() {}

  // Static "Things"

  id() {
    return "none";
  }

  // Automagic

  className() {
    return "ext-" + this.id();
  }

  latestVersion() {
    return config.extensionVersions[this.id()];
  }

  updateRequired() {
    const lv = this.latestVersion();
    const cv = this.getVersion();
    return lv !== cv;
  }

  // Private - ish

  error(error) {
    return new Promise((resolve, reject) =>
      reject(new Error(error))
    )
  }

  noop() {
    return this.error("This operation is not permitted by the installed extension.")
  }
}

export default Extension;