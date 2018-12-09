import React, {Component}  from 'react';
import { Link } from 'react-router-dom';



class MakeQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            numValue: 5,
        }
        
    }

    handleChange = (event) => {
        this.setState({
            numValue: event.target.value
        });
    }

    handleNameChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    render() {
        return (
            <div>

                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Quiz Name</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={this.state.name}
                onChange={this.handleNameChange}
                ></input>
                </div>

                <form>
                    <div className="form-group">
                        <label htmlFor="formControlRange">Number of questions (Slide to select)</label>
                        <input type="range" 
                        className="form-control-range" 
                        id="formControlRange"
                        min="2" max="20" step="1"
                        value={this.state.numValue}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                </form>

                <div>{this.state.numValue}</div>

                <Link to="/questions" >
                    <button type="button" class="btn btn-info">Continue</button>
                </Link>

            </div>
        )
    }
}

export default MakeQuiz;