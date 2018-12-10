import React, {Component} from "react";
import Toolbar from "../Toolbar";
import Routes from "../Routes";
import Lightbox from '../Lightbox';

class Main extends Component {
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