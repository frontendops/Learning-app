import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/home';
import MakeQuiz from './components/makeQuiz';
import QuestionsPage from './components/questionsPage';

class App extends Component {

  

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home />
        )} />

        <Route path="/create" component={MakeQuiz} />

       <Route path="/questions" render={() => (
          <QuestionsPage 
          
          />
        )} />


      </div>
    );
  }
}

export default App;
