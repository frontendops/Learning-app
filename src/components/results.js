import React from 'react';

function Results(props) {
    return (
        <div className="text-center">
            <h2>Results</h2>
            <ul class="list-group text-left">
                {props.questions.map( (question, id) => {
                    let status;
                    if (props.allUserAnswers[id] === props.allCorrectAnswers[id]) {
                        status = "list-group-item-success";
                    } else {
                        status= "list-group-item-danger";
                    }

                    return (
                        <li class={`list-group-item ${status}`}>
                    #{id + 1}: {question.question}. Your answer was: <b>{props.allUserAnswers[id]}</b>
                        </li>
                        
                    )
                })}
            </ul>


        </div>
    );
}

export default Results;