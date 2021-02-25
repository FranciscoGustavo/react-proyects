import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch((err) => alert(err.message));
  }

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
        />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>

          <form action="">
            <h5>
              <label htmlFor="email">E-mail</label>
            </h5>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

            <h5>
              <label htmlFor="password">Password</label>
            </h5>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >Sign In</button>
          </form>

          <p>By signing-in you aggre to CocoAmazon's Conditions of USE & Sale. Please see our Privacy Notice, our Cookies Notice ans our Iterest-Based Ads Notice.</p>

          <button
            onClick={register}
            className="login__registerButton"
          >Create your CocoAmazon Account</button>

        </div>
    </div>
  );
}

export default Login; 