import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { login } from '../../requests';
import { UserContext } from '../../contexts/UserContext';
import Input from '../../components/Input';
import './styles.css';

const LoginPage = () => {
  const { push } = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(UserContext);

  const onFinish = async () => {
    try {
      if (!email || !password) {
        toast.error('Email or password not provided.');

        return;
      }

      const { data } = await login({
        email,
        password,
      });

      console.log(data);

      await authenticate(data.user, data.token);

      await push('/pokemons');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Authentication error.');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form">
          <h1 className="login-title">LOGIN</h1>

          <div>
            <Input
              className="login-email"
              name="email"
              type="text"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="login-button"
            onClick={() => onFinish()}
          >
            SIGN IN
          </button>

          <p>
            Don't have an account?{' '}
            <Link to="/register">
              <span className="login-sign-up">Sign Up!</span>
            </Link>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
