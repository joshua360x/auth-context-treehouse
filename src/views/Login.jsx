import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { contextAuth } from '../context/ProviderAuth';

export default function Login() {
  const location = useLocation();
  const history = useHistory();
  const [errorCaught, setErrorCaught] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(contextAuth);

  const { from } = location.state || { from: { pathname: '/' } };

  function handleSubmit() {
    try {
      const loginWithInformationFromUser = context.loginUser(
        email,
        password
      );

      loginWithInformationFromUser ? history.replace(from) : '/';
    } catch (error) {
      setErrorCaught('Hmm.... Something went wrong');
    }
  }

  return (
    <div>
      <h3>What are you waiting for, Login and be the adventure</h3>
      <label htmlFor="email">
        Email
        <input
          value={email}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </label>
      {errorCaught ?? <h5>{errorCaught}</h5>}
    </div>
  );
}
