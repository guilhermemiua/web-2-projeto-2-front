import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register } from '../../requests';
import Input from '../../components/Input';
import './styles.css';

const Register = () => {
  const { push } = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async () => {
    try {
      if (!email || !password) {
        toast.error('Email or password not provided.');

        return;
      }

      await register({
        email,
        password,
      });

      await toast.success('User registered with success!');

      await push('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Register error.');
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <form className="register-form">
          <h1 className="register-title">REGISTER</h1>

          <div>
            <Input
              className="register-email"
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
            className="register-button"
            onClick={() => onFinish()}
          >
            SIGN UP
          </button>

          <p>
            Already have an account?{' '}
            <Link to="/login">
              <span className="register-sign-up">Login!</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
