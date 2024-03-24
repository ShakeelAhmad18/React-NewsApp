
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Carosuel from './components/Carosuel';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Carosuel/>
        <News pageSize={6}/>
      </div>
    )
  }
}
