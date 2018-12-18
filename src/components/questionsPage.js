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

        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h2>There are {this.props.numValue} Questions </h2>

            <form onSubmit={this.props.handleSubmit}
            onChange={this.props.handleFormChange}
            >

                <QuestionForm questions={questions}
                deleteQuestion={this.props.deleteQuestion}
                onCorrectAnswer={this.props.onCorrectAnswer}
                />

                <button onClick={this.props.addQuestion}>Add new question</button>

                 <Link to="/test" >
                    <input type="submit" value="Submit" /> 
                    
                </Link>

            </form>
                
            </div>
        )
    }
}

export default QuestionsPage;