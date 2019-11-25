import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProductsList from './components/pages/ProductsList'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={ProductsList} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
