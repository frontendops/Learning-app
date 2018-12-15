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

        return(
            <div>
              <ul>{allQuestions}</ul>
            </div>
        )
    }


}

export default DisplayTest;