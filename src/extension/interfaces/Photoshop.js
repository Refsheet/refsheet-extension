import Extension from './Extension'

class Photoshop extends Extension {
  constructor() {
    super();

    if (window && window.parent && window.parent.CSInterface)
      this.cs = new window.parent.CSInterface();
    else
      throw new Error("Are you running inside the Photoshop extension?");
  }

  evalScript(func, ...args) {
    const argString = args.map(JSON.stringify).join(", ");
    const evalString = `${func}(${argString})`;

    console.log("Eval: " + evalString);
    return new Promise((resolve, reject) => {
      const result = this.cs.evalScript(evalString, (returnValue) => {
        const match = returnValue.match(/^ERROR:\s+(.*)/)
        if (match) {
          reject(new Error(match[1]));
        } else {
          resolve(returnValue);
        }
      });

      if(result) reject(new Error(result))
    })
  }

  getOpenDocumentName() {
    return this.evalScript('getDocName');
  }

  setForegroundColor(color) {
    if (!color || !color.match(/^#?[a-f0-9]{6}$/i)) {
      return this.error("Color is invalid: " + color);
    }

    color = color.replace(/^#/, '');
    return this.evalScript('setForegroundColor', color);
  }

  setBackgroundColor(color) {
    if (!color || !color.match(/^#?[a-f0-9]{6}$/)) {
      return this.error("Color is invalid: " + color);
    }

    color = color.replace(/^#/, '');
    return this.evalScript('setBackgroundColor', color);
  }
}

export default Photoshop