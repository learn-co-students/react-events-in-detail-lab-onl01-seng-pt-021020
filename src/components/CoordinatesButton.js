// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {
  coordindates = (event) => {this.props.onReceiveCoordinates([event.clientX,event.clientY])};

  render (){
      return(
        <button onClick={this.coordindates}>Click here</button>
      )
  }
}

export default CoordinatesButton;
