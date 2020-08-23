import React from 'react';
import './App.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {arg: ""}
    }
    handleChange(e) {
        this.setState({arg: e});
        console.log('handle change: ' + e.target.value);
    }
    render() {
        return (
            <input type="text" id="input" onChange={(e) => this.handleChange(e)}></input>
        )
    }
}

export default Form
