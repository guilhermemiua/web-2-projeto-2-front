import React from 'react';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './contexts/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
