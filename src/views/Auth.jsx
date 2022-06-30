import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpKeeper } from '../services/keeper';

export function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    console.log('hello');
    try {
      e.preventDefault();
      const keeper = await signUpKeeper({ email, password, name });
      history.replace('/animals');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = () => {
    setSignIn(!signIn);
  };

  return (
    <>
      {signIn ? (
        <>
          <button onClick={handleClick}>Have an account? SignIn</button>
          <form className="signUp-form" onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              id="name"
              type="name"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={handleClick}>New Keeper? Sign Up</button>
          <form className="signin-form">
            <h3>Sign Up</h3>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>Sign In</button>
          </form>
        </>
      )}
    </>
  );
}
