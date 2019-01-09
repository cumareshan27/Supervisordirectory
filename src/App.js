import React, { Component } from 'react';
import Textfield from "./components/Textfield";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Residence Dashboard</h1>
        <Textfield id="FirstName" labelName="First Name" value="" />
        <Textfield id="LastName" labelName="Last Name" value="" />
        <Textfield id="Email" labelName="Last Email" value="" />
      </div>
    );
  }
}

export default App;
