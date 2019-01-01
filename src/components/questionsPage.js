import React, {Component}  from 'react';
import QuestionForm from './questionForm.js';
import { Link } from 'react-router-dom';
import '../App.css'

class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
        
    }


    render() {
      
        let {questions} = this.props

        let mainQuestion = questions[0].question;
        let ans1 = questions[0].ans1

        let submitBtn;

        if (questions.length === this.props.allCorrectAnswers.length) {
            submitBtn = <Link to="/test" >
            <button className="btn btn-info"
            > next </button>    
            </Link>
        } else {
            submitBtn = <div> </div>;
        }     



        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h3> Add as many questions as you would like </h3>

           
                <div
                onChange={this.props.handleFormChange}

                >

                <QuestionForm questions={questions}
                deleteQuestion={this.props.deleteQuestion}
                onCorrectAnswer={this.props.onCorrectAnswer}
                saveCorrectAnswer={this.props.saveCorrectAnswer}
                clicked={this.props.clicked}
                toggleSaveButton={this.props.toggleSaveButton}
                changeAnswer={this.props.changeAnswer}
                />

                <button onClick={this.props.addQuestion}>Add new question</button>

                </div>

                {submitBtn}

              
            </div>
        )
    }
}

export default QuestionsPage;