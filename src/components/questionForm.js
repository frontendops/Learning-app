import React, {Component}  from 'react';
//import MultipeChoice from './multipleChoice'

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            answersObj: [{option: ''}],
            questions: [' '],
        }
        
    }


    handleInput = (text, identifier) => {
        const questions = [...this.state.questions];
        questions[identifier] = text;
        this.setState({ questions })
    }


    handleQuestionChange = (id) => (e) => {
        const newOption = this.state.answersObj.map((question, idx) => {
            if (id !== idx) return question;
            return { ...question, option: e.target.value };
          });
      
          this.setState({ answersObj: newOption });
        }

    handleAddOption = () => {
        this.setState({ answersObj: this.state.answersObj
            .concat([{option: ''}])
    })
    }

    handleDeleteOption = (id) => () => {
        this.setState({ answersObj: this.state.answersObj
            .filter((s, qid) => id !== qid)
        })
    }



    render() {
     
        return (
            <div>
                
                {this.state.questions.map( (question, id) => (
                
                <div className="input-group question">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"
                value={question}
                onChange={(e) => this.handleInput(e.target.value, id)}
                ></input>
                </div>
                
        ))
                }

                {this.state.answersObj.map((question, id) => (
                   
                   <div className="options">
                   <div className="input-group mb-3">
                   <div className="input-group-append">
                    {/* delete button */}
                    <button type="button" class="btn btn-danger"
                    onClick={this.handleDeleteOption(id)}
                    >Delete</button>
                   </div>

                   <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                   value={question.option}
                   onChange={this.handleQuestionChange(id)}
                   ></input>
                   </div>
   
               </div>

                ))}

                <button type="button" class="btn btn-success" 
                onClick={this.handleAddOption}
                >Add Option</button>

                <div>
                    {this.state.answersObj.map( answer => (
                        <h1>{answer.option}</h1>
                    ))}
                </div>
                

            </div>
        )
    }
}

export default QuestionForm;