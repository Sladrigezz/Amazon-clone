import React, {useEffect} from 'react'
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout'
import Login from './components/login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './components/payment/Payment';

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // Пользователь был залогинен / только что залогинился
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // Пользователь не залогинен
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

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
          <Route path="/payment">
            <Header></Header>
            <Payment></Payment>
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
