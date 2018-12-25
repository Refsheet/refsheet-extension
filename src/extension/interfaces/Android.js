import Extension from './Extension'

class Android extends Extension {
  constructor(fake=false) {
    super();
    if (fake) { return }

    this.app = window.Android;

    if (!this.app) {
      throw new Error("Are you running inside the Android app?");
    }
  }

  readConfig() {
    const configJson = this.app.readConfig();
    const config = JSON.parse(configJson);
    return Promise.resolve(config);
  }

  writeConfig(config) {
    const configJson = JSON.stringify(config);
    this.app.writeConfig(configJson);
    return Promise.resolve();
  }

  getVersion() {
    this.app.getVersion()
  }

  id() {
    return Extension.ANDROID;
  }
}

export default Android;