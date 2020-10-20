// import React, { Component } from 'react';
import React from 'react';


class DelayedButton extends React.Component {

    handleClick = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    
    
    render() {
        return <button onClick={this.handleClick}>Delayed</button>
    }
}

export default DelayedButton

// two props: onDelayedClick and delay