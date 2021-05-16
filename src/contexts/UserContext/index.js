import React, { useEffect, useState } from 'react';
import {
  removeTokenFromSessionStorage,
  removeUserFromSessionStorage,
  setUserToSessionStorage,
  setTokenToSessionStorage,
  getUserFromSessionStorage,
} from '../../helpers/sessionStorage';

export const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();

  const authenticate = (user, token) => {
    setUserToSessionStorage(user);
    setTokenToSessionStorage(token);
    setLoggedUser(user);
  };

  const logout = () => {
    setLoggedUser(undefined);
    removeUserFromSessionStorage();
    removeTokenFromSessionStorage();
  };

  useEffect(() => {
    const userStorage = getUserFromSessionStorage();

    if (userStorage) {
      setLoggedUser(userStorage);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        authenticate,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
