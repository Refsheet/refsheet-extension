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

  getVersion() {
    this.app.getVersion()
  }

  id() {
    return Extension.ANDROID;
  }
}

export default Android;