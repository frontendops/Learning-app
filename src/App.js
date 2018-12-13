import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/home';
import MakeQuiz from './components/makeQuiz';
import QuestionsPage from './components/questionsPage';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        numValue: 2,
    }
    
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
          />
        )} />


      </div>
    );
  }
}

export default App;
