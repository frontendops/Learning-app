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