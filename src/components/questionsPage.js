import './styles/questionsPage.css';
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

        let submitBtn;

        if (questions.length === this.props.allCorrectAnswers.length) {
            submitBtn = <Link to="/test" >
            <button className="btn btn-info"
            > Save and start </button>    
            </Link>
        } else {
            submitBtn = <div> </div>;
        }     



        return (
            <div className="form-container text-center">
                <h1>The quiz name is: {this.props.title}</h1>
                <h3> Add as many questions as you would like </h3>

           
                <div>

                <QuestionForm questions={questions}
                deleteQuestion={this.props.deleteQuestion}
                onCorrectAnswer={this.props.onCorrectAnswer}
                saveCorrectAnswer={this.props.saveCorrectAnswer}
                clicked={this.props.clicked}
                toggleSaveButton={this.props.toggleSaveButton}
                changeAnswer={this.props.changeAnswer}
                handleFormChange={this.props.handleFormChange}
                />

                <button className="btn btn-success" onClick={this.props.addQuestion}>Add new question</button>

                </div>

                {submitBtn}

              
            </div>
        )
    }
}

export default QuestionsPage;