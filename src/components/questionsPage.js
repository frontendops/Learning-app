import React, {Component}  from 'react';
import QuestionForm from './questionForm.js';

class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
        
    }



    render() {
        let forms = [];

        for (let i = 0; i < this.props.numValue; i++) {
            forms.push(<div id={i} className="form"> <QuestionForm /> </div>);
        }

        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h2>There are {this.props.numValue} Questions </h2>

               {forms}
                
            </div>
        )
    }
}

export default QuestionsPage;