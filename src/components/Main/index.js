import React, {Component} from "react";
import Toolbar from "../Toolbar";
import Routes from "../Routes";
import Lightbox from '../Lightbox';
import getExtension from "../../extension";

class Main extends Component {
  componentDidMount() {
    const ext = getExtension();
    const htmlEl = document.documentElement;
    const className = ext.className();

    htmlEl.classList.add(className);
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Routes />
        <Lightbox />
      </div>
    );
  }
}

export default Main;