import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
