import React, { Component } from 'react';


class Textfield extends Component {
    constructor (props){
        super(props);

    }
  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type="text" value={this.props.value} id={this.props.id}/>

        
      </div>
    );
  }
}

export default Textfield;