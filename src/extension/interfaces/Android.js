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
    if (!this.app.readConfig)
      return this.noop();

    try {
      const configJson = this.app.readConfig();
      const config = JSON.parse(configJson);
      return Promise.resolve(config);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  writeConfig(config) {
    if (!this.app.writeConfig)
      return this.noop();

    try {
      const configJson = JSON.stringify(config);
      this.app.writeConfig(configJson);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getVersion() {
    if (!this.app.getVersion)
      return this.noop();

    this.app.getVersion()
  }

  openMenu() {
    if (!this.app.openMenu)
      return this.noop();

    this.app.openMenu();
    return Promise.resolve();
  }

  closeMenu() {
    if (!this.app.closeMenu)
      return this.noop();

    this.app.closeMenu();
    return Promise.resolve();
  }

  MenuSupported = true;
  BackSupported = true;

  id() {
    return Extension.ANDROID;
  }
}

export default Android;