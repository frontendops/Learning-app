import React, {Component}  from 'react';
import { Link } from 'react-router-dom';



class MakeQuiz extends Component {
  



    render() {
        return (
            <div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Quiz Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={this.props.title}
                onChange={this.props.handleNameChange}
                ></input>
                </div>

               

                <div>{this.props.numValue}</div>

                <Link to="/questions" >
                    <button type="button" className="btn btn-info">Continue</button>
                </Link>

            </div>
        )
    }
}

export default MakeQuiz;