import './styles/questionForm.css';
import React, {Component}  from 'react';
import FormInput from './formInput';

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
          
        }
        
    }



      renderEditbutton = (id) => {
        if (this.props.clicked[id] === true) {
          return <input value="change answer" type="button" onClick={() => this.props.changeAnswer(id)} className="btn-success changeAns" />
        } else {
          return <div></div>;
        }
      }


    render() {
      let deletebtn;
      let questions = this.props.questions;

    if (this.props.questions.length === 1) {
      deletebtn = "off";
    } else {
      deletebtn = "";
    }
     
        return (
            <div>
                
               { this.props.questions.map( (val, id ) => {
                        let questionId = `question`;
                        let ans1 = `ans1`;
                        let ans2 = `ans2`;
                        let ans3 = `ans3`;
                        let ans4 = `ans4`;

                        

                        return (
                            <form key={id}
                            onSubmit={this.props.saveCorrectAnswer}
                            required
                            className="form"
                            > 
                                <label htmlFor={questionId}>{`# ${id + 1}`}</label>
                                <input
                                type="text"
                                name={questionId}
                                data-id={id}
                                id={questionId}
                                className="question"
                                placeholder="Type your question here"
                                value={questions[id].question}
                                onChange={(e) => this.props.handleFormChange(e)}
                                required
                                />
                                <br />

                                <FormInput label="a" 
                                  id={id}
                                  answerId={ans1}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  value={questions[id].ans1}
                                  handleFormChange={this.props.handleFormChange}
                                  className="ans1"
                                />

                                <FormInput label="b" 
                                  id={id}
                                  answerId={ans2}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  value={questions[id].ans2}
                                  handleFormChange={this.props.handleFormChange}
                                  className="ans2"
                                />

                                <FormInput label="c" 
                                  id={id}
                                  answerId={ans3}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  value={questions[id].ans3}
                                  handleFormChange={this.props.handleFormChange}
                                  change
                                  className="ans3"
                                />

                                <FormInput label="d" 
                                  id={id}
                                  answerId={ans4}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  value={questions[id].ans4}
                                  handleFormChange={this.props.handleFormChange}
                                  className="ans4"
                                />

                                <button type="button"
                                className={`btn btn-danger delete-btn ${deletebtn}`}
                                onClick={() => this.props.deleteQuestion(id)}
                                >Delete</button>

                                <input type="submit" value="Submit"
                                className={`save-btn ${this.props.clicked[id]}`}
                                onClick={() => this.props.toggleSaveButton(id)} />

                                {this.renderEditbutton(id)}
                            </form>
               
               );
               })}

            </div>
        )
    }
}

export default QuestionForm;