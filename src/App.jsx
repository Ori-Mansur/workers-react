import React from 'react';
import AppNav from './components/AppNav'
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <AppNav />
      </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

    </div>
  );
}

export default App;
