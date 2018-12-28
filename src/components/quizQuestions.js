import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenAnswer: "",
            currentQuestion: 0,
            endScreen: false,
            totalCorrect: 0,
        }

    }

    checkAnswer = (id, e) => {
        const answer = e.target.nextSibling.innerHTML;
        console.log(answer);

       

            if (answer === this.props.allCorrectAnswers[id]  ) {
                this.setState( prevState => {
                    return {totalCorrect: prevState.totalCorrect + 1}
                })
                console.log(this.state.totalCorrect);
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
        
    
    restartQuiz = () => {
        this.setState({
            currentQuestion: 0,
            endScreen: false,
            totalCorrect: 0,
        })
    }

    render() {
            let question = this.props.questions;
            let id = this.state.currentQuestion;

            let endGameScreen = <div> The quiz Is Over !! 
                <h2>you got {this.state.totalCorrect} / {question.length} quesions correct </h2>
            </div>;

            
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
                      
                        <button className="btn btn-info"
                        onClick={this.restartQuiz}
                        >Retake quiz</button>   

                        <Link to="/">
                            <button className="btn btn-info"
                            onClick={this.props.resetQuiz}
                            > Go Home </button>
                        </Link>
                   </div> 
                );
            }
    }
}

export default QuizQuestion;