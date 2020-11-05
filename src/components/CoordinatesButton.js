import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Coords</button>
            </div>
        )
    }
}

export default CoordinatesButton