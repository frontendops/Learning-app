import React, { Component } from 'react';

class DisplayTest extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const allQuestions = this.props.questions.map(question => 
            <div>

                <li>{question.question}</li>

                <li>{question.ans1}</li>
                <li>{question.ans2}</li>
                <li>{question.ans3}</li>
                <li>{question.ans4}</li>

            </div>
            );

        const correctAnswers = this.props.allCorrectAnswers.map( (answer, index) => {
            return (
                <h2>{`this is the correct answer for question- ${index + 1}: ${answer}`}</h2>
            )
        })

        return (
            <div>
            <div>
              <ul>{allQuestions}</ul>
            </div>

                {correctAnswers}

            </div>




        )
    }


}

export default DisplayTest;