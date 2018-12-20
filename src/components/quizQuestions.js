import React, { Component } from 'react';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenAnswer: ""
        }

    }

    checkAnswer = (id, e) => {
        const answer = e.target.nextSibling.innerHTML;
        console.log(answer);

        if (answer === this.props.allCorrectAnswers[id]) {
            console.log("correct!!")
        } else {
            console.log("wrong")
        }


    } 

    render() {


        return(
            <div>
                <form>
                    {
                        this.props.questions.map( (question, id) => (

                            <form key={id}>
                                <h2>{question.question}</h2>

                                <div>
                                    
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question.ans1}>{question.ans1}</label>
                                       
                                 
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question.ans2}>{question.ans2}</label>
                                       
                                  
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question.ans2}>{question.ans3}</label>
                                  
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question.ans2}>{question.ans4}</label>

                                    <input type="submit" value="Submit"
                                      />

                                </div>

                            </form>
                            
                        ))
                    }
                   
                </form>
            </div>
        );
    }
}

export default QuizQuestion;