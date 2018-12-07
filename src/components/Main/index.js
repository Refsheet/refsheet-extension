import React, {Component} from "react";
import Toolbar from "../Toolbar";
import Routes from "../Routes";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Routes />
      </div>
    );
  }
}

export default Main;