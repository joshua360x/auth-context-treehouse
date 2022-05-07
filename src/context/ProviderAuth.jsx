import React, { createContext, useState } from 'react';

export const contextAuth = createContext();

export function ProviderAuth({ children }) {
  const [userRecieved, setUserRecived] = useState(null);
  const [entries, setEntries] = useState([])

  function loginUser(email, password) {
    const successfulLoginOfUser =
      email === 'jo@jow.com' && password === 'password';

    successfulLoginOfUser ? setUserRecived({ email }) : '';
    return successfulLoginOfUser;
  }

  function logOutUser(callbackFuntion) {
    setUserRecived(null);
    callbackFuntion();
  }

  return (
    <contextAuth.Provider value={{ userRecieved, logOutUser, loginUser, entries }}>
      {children}
    </contextAuth.Provider>
  );
}
