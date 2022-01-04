import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './menu_data/Menu';
import DescriptionComponent from './AppData/DescriptionComponent';

class App extends Component {
  render() {
    return (
      <section className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Menu />
        <section className="App-intro">
          <DescriptionComponent />
        </section>
      </section>
    );
  }
}

export default App;
