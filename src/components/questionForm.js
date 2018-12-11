import React, {Component}  from 'react';
//import MultipeChoice from './multipleChoice'

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            questionsObj: [{option: ''}],
        }
        
    }



    handleQuestionChange = (id) => (e) => {
        const newOption = this.state.questionsObj.map((question, idx) => {
            if (id !== idx) return question;
            return { ...question, option: e.target.value };
          });
      
          this.setState({ questionsObj: newOption });
        }

    handleAddOption = () => {
        this.setState({ questionsObj: this.state.questionsObj
            .concat([{option: ''}])
    })
    }

    handleDeleteOption = (id) => () => {
        this.setState({ questionsObj: this.state.questionsObj
            .filter((s, qid) => id !== qid)
        })
    }



    render() {
     
        return (
            <div>
                
                <div className="input-group question">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"
                value={this.props.option}
                onChange={this.props.handleInput}
                ></input>
                </div>

                {this.state.questionsObj.map((question, id) => (
                   
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
                

            </div>
        )
    }
}

export default QuestionForm;