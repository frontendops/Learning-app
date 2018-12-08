import React, {Component}  from 'react';

class MakeQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            numValue: 5,
        }
        
    }

    handleChange = (event) => {
        this.setState({
            numValue: event.target.value
        });
    }


    render() {
        return (
            <div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Quiz Name</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>

                <form>
                    <div className="form-group">
                        <label htmlFor="formControlRange">Number of questions</label>
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

                <button type="button" class="btn btn-info">Continue</button>

            </div>
        )
    }
}

export default MakeQuiz;