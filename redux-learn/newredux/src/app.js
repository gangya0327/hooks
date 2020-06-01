import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        number: {this.props.number}
      </div>
    )
  }
}

export default App
