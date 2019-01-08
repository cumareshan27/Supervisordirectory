import React, { Component } from 'react';


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
        event.preventDefault();
    }


render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>{this.props.labelName}</label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />


        </div>
        <input type="submit" value="Submit" />
        </form>
    );
}
}

export default Textfield;