import React, { Component } from 'react';
import Toolbar from "./Toolbar";
import Content from "./content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />

        <Content relax>
          <img
            src="https://assets.refsheet.net/assets/logos/RefsheetLogo_White_200.png"
            className="logo"
            alt="Refsheet.net"
            width={100}
            height={100}
          />

          <h1>What do?</h1>
        </Content>
      </div>
    );
  }
}

export default App;
