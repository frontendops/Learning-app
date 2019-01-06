import './styles/quizQuestions.css';
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
            chosen: false
        }

    }

    checkAnswer = (id, e) => {
        const answer = e.target.nextSibling.innerHTML;
        const answerEl = e.target.nextSibling;

        this.setState({chosen: true});
        
        
        if (answer === this.props.allCorrectAnswers[id]  ) {
            //this needs to go in a seperate func in a sep button
            this.setState( prevState => {
                return {totalCorrect: prevState.totalCorrect + 1}
            })
                answerEl.classList.add("correct");           
            } else {
                answerEl.classList.add("wrong");

            }


        }

        
    checkEnd = () => {
        this.setState({ chosen: false})
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
            let nextBtn;

            if( this.state.chosen === true) {
                nextBtn  = <button onClick={this.checkEnd}>next question</button>;
            } else {
                nextBtn = <div></div>;
            }

            let endGameScreen = <div> The quiz Is Over !! 
                <h2>you got {this.state.totalCorrect} / {question.length} quesions correct </h2>
            </div>;

            
            if (this.state.endScreen === false) {
     
                return(
                    <div>
                           
                        <form key={id}>
                            <h2>{question[id].question}</h2>

                            <div>
                                <ul className="quiz-questions">
                                    <li>
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        className="answer-option"
                                        required
                                        />
                                        <label htmlFor={question[id].ans1}
                                        className="blue "
                                        >{question[id].ans1}</label>
                                    </li>
                                    
                                    <li>
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        className="answer-option"
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}
                                        className="blue "
                                        >{question[id].ans2}</label>
                                    </li>
                                    
                                    <li>
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        className="answer-option"
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}
                                        className="blue "
                                        >{question[id].ans3}</label>
                                    </li>

                                    <li>
                                        <input type="radio"
                                        name="answer" 
                                        onChange={(e) => this.checkAnswer(id,e)}
                                        className="answer-option"
                                        required
                                        />
                                        <label htmlFor={question[id].ans2}
                                        className="blue "
                                        >{question[id].ans4}</label>
                                    </li>
                                
                                </ul>

                                {nextBtn}

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

                        <div>
                            <h2>results</h2>

                        </div>
                   </div> 
                );
            }
    }
}

export default QuizQuestion;