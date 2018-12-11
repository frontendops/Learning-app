import React, {Component}  from 'react';
import QuestionForm from './questionForm.js';
import '../App.css'

class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: '',
            questionsObj: [{option: ''}],

        }
        
    }

    handleInput = (e) => {
        this.setState({ option: e.target.value})
    }


    render() {
        let forms = [];

        for (let i = 0; i < this.props.numValue; i++) {
            forms.push(<div id={i} className="form"> <QuestionForm 
            title={this.props.title}
            option={this.state.option}
            handleInput={this.handleInput}
            /> </div>);
        }

        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h2>There are {this.props.numValue} Questions </h2>

               {forms}

                <br />
                <br />

               <button type="button" class="btn btn-primary">Next</button>
                
            </div>
        )
    }
}

export default QuestionsPage;