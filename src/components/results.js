import React from 'react';

function Results(props) {
    return (
        <div>
            <h2 className="text-center">Results</h2>
            <ul>
                {props.questions.map( (question, id) => {
                    return (
                        <div>
                            <ul>#{id + 1}: {question.question}</ul>
                            <ul> The correct answer was: {props.allCorrectAnswers[id]}</ul>
                        </div>
                    )
                })}
            </ul>


        </div>
    );
}

export default Results;