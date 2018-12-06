import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='toolbar'>
          <button onClick={e => window.location.reload()}>Reload</button>

          <div className='right'>
            <input type='search' placeholder='Search...' />
          </div>
        </div>

        <div className='content'>
          <p>This is the test of the Refsheet Artist Extension.</p>
        </div>
      </div>
    );
  }
}

export default App;
