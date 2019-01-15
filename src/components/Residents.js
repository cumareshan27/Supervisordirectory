import React, { Component } from 'react';
import Textfield from './Textfield';

class Resident extends Component {
  constructor(props) {
    super(props);
  //  this.state = { value: '' };
    this.state = {
      books: [],
      FirstName: "",
      LastName: "",
      synopsis: ""
    };

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
      <div className="Resident">
        <h1>Residence Dashboard</h1>
        <form onSubmit={this.handleSubmit}>
          <Textfield id="FirstName" labelName="First Name" value="" />
          <Textfield id="LastName" labelName="Last Name" value="" />
          <Textfield id="Email" labelName="Email" value="" />
          <Textfield id="PhoneNumber" labelName="PhoneNumber" value="" />
          <Textfield id="AddressLine1" labelName="AddressLine1" value="" />
          <Textfield id="AddressLine2" labelName="AddressLine2" value="" />
          <Textfield id="City" labelName="City" value="" />
          <Textfield id="state" labelName="State" value="" />
          <Textfield id="ZipCode" labelName="ZipCode" value="" />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Resident;
