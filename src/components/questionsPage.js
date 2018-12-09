import React, {Component}  from 'react';

class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        
    }


    render() {
        return (
            <div>
                <h1>The quiz name is: {this.props.title}</h1>
                <h2>There are {this.props.numValue} Questions </h2>
                
            </div>
        )
    }
}

export default QuestionsPage;