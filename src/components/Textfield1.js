import React, { Component } from 'react';
import API from '../utils/API';

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    //this.onSubmit({value:event.})

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input
          type="text"
          value={this.state.value}
          // onChange={this.handleChange}
          {...props}

        />
      </div>
    );
  }
}

export default Textfield;
