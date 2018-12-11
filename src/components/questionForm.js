import React, {Component}  from 'react';
import MultipeChoice from './multipleChoice'

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selectedOption: ''
        }
        
    }

    toggleDrop = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }

    selectOptions = (e) => {
        console.log(e);
        
    }


    render() {
        const menuClass = `dropdown-menu ${this.state.isOpen ? " show" : ""}`;

        return (
            <div>
                
                <div className="input-group question">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"></input>
                </div>

                <MultipeChoice />
                <MultipeChoice />

                <button type="button" class="btn btn-success">Add Option</button>
                

            </div>
        )
    }
}

export default QuestionForm;