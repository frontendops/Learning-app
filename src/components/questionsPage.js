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

            <form onSubmit={this.props.handleSubmit}>
                <button onClick={this.props.addQuestion}>Add new question</button>
                

                {
                    questions.map( (val, id ) => {
                        let questionId = `Question-${id}`;
                        let ans1 = `ans1 for question ${id}`;
                        return (
                            <div key={id}>
                                <label htmlFor={questionId}>{`question # ${id + 1}`}</label>
                                <input
                                type="text"
                                name={questionId}
                                data-id={id}
                                id={questionId}
                                className="name"
                                />
                                <label htmlFor={ans1}>answer 1</label>
                                <input
                                type="text"
                                name={ans1}
                                data-id={id}
                                id={ans1}
                                className="age"
                                />
                            </div>
                        )

                    })
                }

                    <input type="submit" value="Submit" /> 

            </form>
                
            </div>
        )
    }
}

export default QuestionsPage;