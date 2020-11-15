import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
