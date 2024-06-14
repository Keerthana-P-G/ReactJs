import React, { useState } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let errorMessage = '';

    if (username.trim() === '' || username.length < 3) {
      errorMessage += 'Username must be at least 5 characters.\n';
    }

    if (password.trim() === '' || password.length < 5) {
      errorMessage += 'Password must be at least 8 characters.\n';
    }

    if (email.trim() === '' || !isEmailValid(email)) {
      errorMessage += 'Please provide a valid email address.\n';
    }

    if (errorMessage !== '') {
      alert(errorMessage);
    } else {
      setIsRegistered(true);
      setIsLogin(true);
      alert('Registration successful! You can now log in.');
    }
  };

  const handleLogin = () => {
    if (loginUsername.length >= 3 && loginPassword.length >= 5) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleReset = () => {
    setIsRegistered(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setLoginUsername('');
    setLoginPassword('');
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-section">
      {isRegistered ? (
        <div>
          <h2 className="auth-heading">Registration Successful!</h2>
          <p className="auth-message">You can now log in.</p>
          <Link to='/'><button className="auth-button" onClick={handleReset}>Login</button></Link>
        </div>
      ) : isLogin ? (
        <div>
          <h2 className="auth-heading">LOGIN</h2>
          <label className="auth-label">
            Username
            <input className="auth-input" type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
          </label>
          <br />
          <label className="auth-label">
            Password
            <input className="auth-input" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
          </label>
          <br />
          <Link to='/'><button className="auth-button" onClick={handleLogin}>Log In</button></Link>
          <p>Don't have an account? <button className='auth-button' onClick={togglePage}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <h2 className="auth-heading">REGISTER</h2>
          <label className="auth-label">
            Username
            <input className="auth-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label className="auth-label">
            Password
            <input className="auth-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <label className="auth-label">
            Email
            <input className="auth-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button className="auth-button" onClick={handleSignUp}>Sign Up</button>
          <p>Already have an account? <button className="auth-button" onClick={togglePage}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
