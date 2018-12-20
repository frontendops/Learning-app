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
                <QuizQuestions 
                questions={this.props.questions}
                allCorrectAnswers={this.props.allCorrectAnswers}
                />
            </div>

        )
    }


}

export default DisplayTest;