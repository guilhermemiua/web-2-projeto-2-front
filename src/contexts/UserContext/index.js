import React, { useEffect, useState } from 'react';
import {
  removeTokenFromSessionStorage,
  removeUserFromSessionStorage,
  setUserToSessionStorage,
  setTokenToSessionStorage,
} from '../../helpers/sessionStorage';

export const UserContext = React.createContext({
  user: undefined,
  authenticate: () => null,
  logout: () => null,
});

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
    const userStorage = localStorage.getItem('user');

    if (userStorage) {
      setLoggedUser(JSON.parse(userStorage));
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
