import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {arg: ""}
    }
    handleChange(e) {
        this.setState({arg: e.target.value});
        console.log('handle change: ' + e.target.value);
    }
    submitRequest = () => {
        console.log('submitting request');
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText);
        })
        xhr.open('GET', 'http://localhost:80/api/refs?data=' + this.state.arg);
        xhr.send()
    }
    render() {
        return (
            <div id="input">
                <div id="title">Inspect and open the network tab to see the GET request</div>
                <input id="blank" type="text" placeholder='Type something...' onChange={(e) => this.handleChange(e)}></input>
                <button id="submit" onClick={this.submitRequest} type="button">Send GET request</button>
            </div>
        )
    }
}

export default withRouter(Form)
