import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const loginHandler = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      alert('Logged in successfully')
      history.push('/');
    }).catch((error) => {
      alert(error.message)
    })
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginHandler}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
