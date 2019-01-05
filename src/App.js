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


//old function
//handleFormChange = (e) => {
//  if (["question", "ans1", "ans2", "ans3", "ans4"].includes(e.target.className)) {
//    let questions = [...this.state.questions]
//    questions[e.target.dataset.id][e.target.className] = e.target.value
    

//  } else {
//    this.setState({ [e.target.name] : e.target.value})
//  }
//}

handleFormChange = (e) => {
  let questions = [...this.state.questions];
  const name = e.target.name;
  const value = e.target.value;
  questions[e.target.dataset.id][name] = value;

  this.setState({ questions});

  
}


deleteQuestion = (id) => {
  let questions = [...this.state.questions];
  let allCorrectAnswers = [...this.state.allCorrectAnswers];

  this.setState({ questions: questions.filter( (question, idx)  => {
      return idx !== id
  })
})

  this.setState({ allCorrectAnswers: allCorrectAnswers.filter( (answer, idx) => {
    return idx !== id
  })
})

}

//function for selecting and displaying correct answers

onCorrectAnswer = (e) => {
  const correctAnswer = e.target.nextSibling.value;
  this.setState({correctAnswer: correctAnswer});
}

saveCorrectAnswer = (e) => {
  e.preventDefault();
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

//Endgame (not the avengers xD)

resetQuiz = () => {
    this.setState({
        title: "",
        questions: [{
          question: "",
          ans1: "",
          ans2: "",
          ans3: "",
          ans4: ""
        },],
        correctAnswer: "",
        allCorrectAnswers: [],
        clicked: [ false,]
    })
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
          allCorrectAnswers={this.state.allCorrectAnswers}

          clicked={this.state.clicked}
          toggleSaveButton={this.toggleSaveButton}
          changeAnswer={this.changeAnswer}
          />
        )} />

         <Route path="/test" render={() => (
          <DisplayTest 
          questions={this.state.questions}
          allCorrectAnswers={this.state.allCorrectAnswers}
          title={this.state.title}
          resetQuiz={this.resetQuiz}
          />
        )} />


      </div>
    );
  }
}

export default App;
