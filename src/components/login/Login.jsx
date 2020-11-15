import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth, db} from '../../firebase'
import './Login.css'

function Login() {
  const history = useHistory()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {history.push('/')})
      .catch(error => alert(error.message))
    // firebase signIn
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {if (auth) {history.push('/')} })
      .catch(error => alert(error.message))
    //firebase register
  }

  return (
    <div className="login">

      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>

          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>

          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

        </form>
        <p>By continuing, you agree to AMAZON'S FAKE CLONE Conditions of Use and Privacy Notice.</p>

        <button onClick={register} className="login__registerButton">Create your FAKE Amazon account</button>

      </div>
    </div>
  )
}

export default Login
