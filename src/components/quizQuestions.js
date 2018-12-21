import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenAnswer: "",
            currentQuestion: 0,
            endScreen: false
        }

    }

    checkAnswer = (id, e) => {
        const answer = e.target.nextSibling.innerHTML;
        console.log(answer);

       

            if (answer === this.props.allCorrectAnswers[id]  ) {
                alert("correct!!");
                this.checkEnd();
            } else {
                alert("wrong");
                this.checkEnd();
                
            }

           

        }

        
    checkEnd = () => {
        if (this.state.currentQuestion < this.props.allCorrectAnswers.length - 1) {

            this.setState( (prevState) =>
                { return {currentQuestion: prevState.currentQuestion + 1}})
        } else {
            this.setState({ endScreen: true })
        }
    }
        
    
    

    render() {
            let question = this.props.questions;
            let id = this.state.currentQuestion;

            let endGameScreen = <div> The quiz Is Over !! </div>;

            
            if (this.state.endScreen === false) {
     
                return(
                    <div>
                           
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
                                                 
                    </div>
                );
            } else {
                return (
                   <div>
                        <h1> {endGameScreen}  </h1>
                        <Link to="/">
                            <button className="btn btn-info"> Go Home </button>
                        </Link>
                   </div> 
                );
            }
    }
}

export default QuizQuestion;