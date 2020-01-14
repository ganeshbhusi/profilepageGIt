import React, { Component } from 'react';
import Header from './components/Header';
import LeftPanel from './components/leftPanel';
// import App from './App';

class App2 extends Component {
  render() {
    return (
      <div>
          <Header />
          <div style={{marginTop: "16px",width: "96%"}}>
            <LeftPanel />
          </div>
      </div>
    );
  }
}

export default App2;
