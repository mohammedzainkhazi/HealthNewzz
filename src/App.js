import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import './App.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Dashboard/>
      </div>
    )
  }
}

export default App          