import React, {Component}  from 'react';

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        
    }


    render() {
        return (
            <div>
                
                <div className="input-group">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</button>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">2</a>
                        <a className="dropdown-item" href="#">3</a>
                        <a className="dropdown-item" href="#">4</a>
                        <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default QuestionForm;