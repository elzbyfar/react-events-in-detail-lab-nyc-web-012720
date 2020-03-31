// Code DelayedButton Component Here

import React, { Component } from 'react'

class DelayedButton extends Component {

  constructor() {
    super()
  }

  clickHandler = (event) => {
    event.persist()
    return setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
    <button onClick={this.clickHandler}></button>
    )
  }

}


export default DelayedButton