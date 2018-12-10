import React, {Component}  from 'react';

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
        
    }

    toggleDrop = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }


    render() {
        const menuClass = `dropdown-menu ${this.state.isOpen ? " show" : ""}`;

        return (
            <div>
                
                <div className="input-group">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"></input>

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        onClick={this.toggleDrop}
                        >Options</button>

                        <div className={menuClass}>
                        <a className="dropdown-item" href="#">2</a>
                        <a className="dropdown-item" href="#">3</a>
                        <a className="dropdown-item" href="#">4</a>
                     
                        </div>

                    </div>
                </div>

                <h1>{this.props.title}</h1>

            </div>
        )
    }
}

export default QuestionForm;