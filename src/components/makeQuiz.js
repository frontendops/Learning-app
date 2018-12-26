import React, {Component}  from 'react';
import { Link } from 'react-router-dom';



class MakeQuiz extends Component {
  



    render() {
        let nextBtn;

        if (this.props.title.length > 1) {
            nextBtn = <Link to="/questions" >
            <input type="submit" className="btn btn-info" value="next" />
             </Link>
        } else {
            nextBtn = <div></div>
        }

        return (

            <div>

                <form required>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Quiz Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                value={this.props.title}
                onChange={this.props.handleNameChange}
                required
                ></input>
                </div>

               {nextBtn}
                </form>


            </div>
        )
    }
}

export default MakeQuiz;