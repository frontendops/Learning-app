import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/home';
import MakeQuiz from './components/makeQuiz';
import QuestionsPage from './components/questionsPage';
import DisplayTest from './components/displayTest';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        numValue: 2,
        questions: [{question: "",
                    ans1: "",
                    ans2: "",
                    ans3: "",
                    ans4: ""
                  },
                ]
    }
    
}

handleInput = (identifier, text) => {
  const questions = [...this.state.questions];
  questions[identifier] = text;
  this.setState({ questions })
}
  
handleValChange = (event) => {
  this.setState({
      numValue: event.target.value
  });
}

handleNameChange = (event) => {
  this.setState({
      title: event.target.value
  })
}

addQuestion = () => {
  this.setState( prevState =>({
    questions: [...prevState.questions, {question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: ""
  }],
  }))
}

handleSubmit = (e) => {
    e.preventDefault()
}

handleFormChange = (e) => {
  if (["question", "ans1", "ans2", "ans3", "ans4"].includes(e.target.className)) {
    let questions = [...this.state.questions]
    questions[e.target.dataset.id][e.target.className] = e.target.value
    this.setState( {questions}, () => console.log(this.state.questions) )

  } else {
    this.setState({ [e.target.name] : e.target.value})
  }
}

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home />
        )} />

        <Route path="/create" render={() => (
          <MakeQuiz 
          title={this.state.title}
          numValue={this.state.numValue}
          handleNameChange={this.handleNameChange}
          handleValChange={this.handleValChange}
          />
        )} />

       <Route path="/questions" render={() => (
          <QuestionsPage 
          title={this.state.title}
          numValue={this.state.numValue}

          questions={this.state.questions}
          addQuestion={this.addQuestion}
          handleSubmit={this.handleSubmit}
          handleFormChange={this.handleFormChange}
          />
        )} />

         <Route path="/test" render={() => (
          <DisplayTest 
          questions={this.state.questions}
          />
        )} />


      </div>
    );
  }
}

export default App;
