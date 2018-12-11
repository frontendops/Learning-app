import React, { Component } from 'react';
import '../App.css';


class MultipleChoice extends Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return (
            <div className="options">

                <div className="input-group mb-3">
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroup-sizing-default">x</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                </div>

            </div>
        );
    }

}

export default MultipleChoice;