import React, { Component } from 'react';

class DisplayTest extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const allQuestions = this.props.questions.map(question => 
            <li>{question}</li>
            );

        return(
            <div>
              <ul>{allQuestions}</ul>
            </div>
        )
    }


}

export default DisplayTest;