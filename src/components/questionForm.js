import './styles/questionForm.css';
import React, {Component}  from 'react';
import FormInput from './formInput';

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            value: 'Save answer'
          
        }
        
    }

      toggleSaveButton = () => {
        this.setState({ clicked: !this.state.clicked });

         if (this.state.clicked === false) {
           this.setState({ value: 'Save answer'})
         } else {
          this.setState({ value: 'Answer saved'})
          return <button className="btn-success"> change answer </button>
         }
      }



    render() {

      let editButton;

      if (this.state.clicked === true) {
        editButton = <button className="btn-success"> change answer </button>;
      } else {
        editButton = <div></div>
      }
     
        return (
            <div>
                
               { this.props.questions.map( (val, id ) => {
                        let questionId = `Question-${id}`;
                        let ans1 = `ans1 for question ${id}`;
                        let ans2 = `ans2 for question ${id}`;
                        let ans3 = `ans3 for question ${id}`;
                        let ans4 = `ans4 for question ${id}`;

                        

                        return (
                            <form key={id}
                            onSubmit={this.props.saveCorrectAnswer}
                            required
                            > 
                                <label htmlFor={questionId}>{`question # ${id + 1}`}</label>
                                <input
                                type="text"
                                name={questionId}
                                data-id={id}
                                id={questionId}
                                className="question"
                                required
                                />
                                <br />

                                <FormInput label="a" 
                                  id={id}
                                  answerId={ans1}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  className="ans1"
                                />

                                <FormInput label="b" 
                                  id={id}
                                  answerId={ans2}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  className="ans2"
                                />

                                <FormInput label="c" 
                                  id={id}
                                  answerId={ans3}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  className="ans3"
                                />

                                <FormInput label="d" 
                                  id={id}
                                  answerId={ans4}
                                  onCorrectAnswer={this.props.onCorrectAnswer}
                                  className="ans4"
                                />

                                <button type="button"
                                className="btn btn-danger"
                                onClick={() => this.props.deleteQuestion(id)}
                                >Delete</button>

                                <input type="submit" value={this.state.value}
                                className={`save-btn ${this.state.clicked}`}
                                onClick={this.toggleSaveButton} />

                                {editButton}
                            </form>
               
               );
               })}

            </div>
        )
    }
}

export default QuestionForm;