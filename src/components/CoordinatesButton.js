// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

  constructor() {
    super()
  }

  handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    return this.props.onReceiveCoordinates([x,y])
  }

  render() {
    return <button onClick={this.handleClick} ></button>
  }

}

export default CoordinatesButton