import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './contexts/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>

      <ToastContainer />
    </>
  );
}

export default App;
