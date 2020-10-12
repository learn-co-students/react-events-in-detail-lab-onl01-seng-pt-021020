import React, { Component } from 'react'


export default class DelayedButton extends Component {
    handleClickWithDelay = (event, func, delay) => {
        event.persist()
        setTimeout(() => {func(event)}, delay)
    }

    render() {
        return (
            <button
                onClick={event => {this.handleClickWithDelay(event, this.props.onDelayedClick, this.props.delay)}}
            >
            </button>
        )
    }
}
