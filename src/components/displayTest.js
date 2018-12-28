import React, { Component } from 'react';
import QuizQuestions from './quizQuestions';


class DisplayTest extends Component {
    constructor(props) {
        super(props);
            this.state = { 
                
            }
               
    }

    render() {
       


        return (
            <div>

               <h1>{this.props.title} </h1> 
                <QuizQuestions 
                questions={this.props.questions}
                allCorrectAnswers={this.props.allCorrectAnswers}
                resetQuiz={this.props.resetQuiz}
                />


            </div>

        )
    }


}

export default DisplayTest;