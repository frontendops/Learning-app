import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/home';
import MakeQuiz from './components/makeQuiz';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Home />
        )} />

        <Route path="/create" component={MakeQuiz} />

      </div>
    );
  }
}

export default App;
