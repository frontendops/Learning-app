import React, { Component } from 'react';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenAnswer: "",
            currentQuestion: 0
        }

    }

    checkAnswer = (id, e) => {
        const answer = e.target.nextSibling.innerHTML;
        console.log(answer);

        if (answer === this.props.allCorrectAnswers[id]) {
            alert("correct!!");
            
        } else {
            alert("wrong");
        }
        
        this.setState( (prevState) =>
         { return {currentQuestion: prevState.currentQuestion + 1}})

    } 

    render() {
            let question = this.props.questions;
            let id = this.state.currentQuestion;

        return(
            <div>
                <form>
                   

                            <form key={id}>
                                <h2>{question[id].question}</h2>

                                <div>
                                    
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question[id].ans1}>{question[id].ans1}</label>
                                       
                                 
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}>{question[id].ans2}</label>
                                       
                                  
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}>{question[id].ans3}</label>
                                  
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}>{question[id].ans4}</label>

                                  

                                </div>

                            </form>
                            
                   
                   
                </form>
            </div>
        );
    }
}

export default QuizQuestion;