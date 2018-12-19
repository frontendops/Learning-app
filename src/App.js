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
        questions: [{
          question: "",
          ans1: "",
          ans2: "",
          ans3: "",
          ans4: ""
        },],

        correctAnswer: "",
        allCorrectAnswers: [],
        clicked: [ false,],
    }
    
}

//inputs for main quiz questions
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


//functions for form inputs 
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
    

  } else {
    this.setState({ [e.target.name] : e.target.value})
  }
}


deleteQuestion = (id) => {
  let questions = [...this.state.questions];

  this.setState({ questions: questions.filter( (question, idx)  => {
      return idx !== id
  })
})

}

//function for selecting and displaying correct answers

onCorrectAnswer = (e) => {
  const correctAnswer = e.target.nextSibling.value;
  this.setState({correctAnswer: correctAnswer});
}

saveCorrectAnswer = () => {
  const correctAnswer = [...this.state.correctAnswer].join("");
  
  this.setState({
    allCorrectAnswers: this.state.allCorrectAnswers.concat(correctAnswer)
  });
}

toggleSaveButton = (id) => {
  let arr = this.state.clicked.slice();
  arr[id] = !arr[id]

  this.setState({ clicked: arr });
}

changeAnswer = (id) => {
  
  let arr = this.state.allCorrectAnswers.slice();
  arr[id] = this.state.correctAnswer;
  
  this.setState({ allCorrectAnswers: arr })

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
          deleteQuestion={this.deleteQuestion}
          onCorrectAnswer={this.onCorrectAnswer}
          saveCorrectAnswer={this.saveCorrectAnswer}

          clicked={this.state.clicked}
          toggleSaveButton={this.toggleSaveButton}
          changeAnswer={this.changeAnswer}
          />
        )} />

         <Route path="/test" render={() => (
          <DisplayTest 
          questions={this.state.questions}
          allCorrectAnswers={this.state.allCorrectAnswers}
          />
        )} />


      </div>
    );
  }
}

export default App;
