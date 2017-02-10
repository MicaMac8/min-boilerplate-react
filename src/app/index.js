import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {

  render () {
    return (
      <div>
        <h1>Boiler plate React</h1>
        <p>Start modifying !</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'))
