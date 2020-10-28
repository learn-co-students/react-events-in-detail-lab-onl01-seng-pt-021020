// Code DelayedButton Component Here
import React from 'react';


class DelayedButton extends React.Component {

  delay = this.props.delay

  callback = (event)=> {this.props.onDelayedClick(event)}

  buttonClicked= (event) => {
    event.persist();
    setTimeout(() => {
    this.callback(event)
  }, this.delay)
  }


  render (){
      return(
        <button onClick={this.buttonClicked}>delay button</button>
      )
  }
}

export default DelayedButton;
