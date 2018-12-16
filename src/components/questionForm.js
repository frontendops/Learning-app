import React, {Component}  from 'react';
//import MultipeChoice from './multipleChoice'

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
          
        }
        
    }


  



    render() {
     
        return (
            <div>
                
               { this.props.questions.map( (val, id ) => {
                        let questionId = `Question-${id}`;
                        let ans1 = `ans1 for question ${id}`;
                        let ans2 = `ans2 for question ${id}`;
                        let ans3 = `ans3 for question ${id}`;
                        let ans4 = `ans4 for question ${id}`;

                        let correctAnswer = `correct answer for question # ${id +1}`;

                        return (
                            <div key={id}
                            className="form"
                            >
                                <label htmlFor={questionId}>{`question # ${id + 1}`}</label>
                                <input
                                type="text"
                                name={questionId}
                                data-id={id}
                                id={questionId}
                                className="question"
                                />
                                <br />

                                <label htmlFor={ans1}>a</label>
                                <input
                                type="text"
                                name={ans1}
                                data-id={id}
                                id={ans1}
                                className="ans1"
                                />
                                <br />

                                <label htmlFor={ans2}>b</label>
                                <input
                                type="text"
                                name={ans2}
                                data-id={id}
                                id={ans2}
                                className="ans2"
                                />
                                <br />

                                <label htmlFor={ans3}>c</label>
                                <input
                                type="text"
                                name={ans3}
                                data-id={id}
                                id={ans3}
                                className="ans3"
                                />
                                <br />

                              
                                <label htmlFor={ans4}>d</label>
                                <input
                                type="text"
                                name={ans4}
                                data-id={id}
                                id={ans4}
                                className="ans4"
                                />
                                <br />

                                <button type="button"
                                className="btn btn-danger"
                                onClick={() => this.props.deleteQuestion(id)}
                                >Delete</button>
                            </div>
               
               );
               })}

            </div>
        )
    }
}

export default QuestionForm;