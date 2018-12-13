import React, {Component}  from 'react';
import QuestionForm from './questionForm.js';
import '../App.css'

class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
        
    }


    render() {
        let forms = [];

        for (let i = 0; i < this.props.numValue; i++) {
            forms.push(i);
        }

        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h2>There are {this.props.numValue} Questions </h2>

               {this.props.questions.map((question, id) => (
                   <div className="form"
                   key={id}
                   >

                       <div className="input-group question">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What is your Question?"
                value={question}
               onChange={(e) => this.props.handleInput(id, e.target.value)}
                ></input>
                </div>

                   <QuestionForm 
                   
                   title={this.props.title}
                   option={this.state.option}
                   handleInput={this.props.handleInput}
                   questions={this.props.questions}
                   />
                   </div>
               )
               )}

                <br />
                <br />

               <button type="button" class="btn btn-primary">Next</button>
                
            </div>
        )
    }
}

export default QuestionsPage;