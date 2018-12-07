class Extension {
  getOpenDocumentName() {
    return this.noop()
  }

  setForegroundColor() {
    return this.noop()
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