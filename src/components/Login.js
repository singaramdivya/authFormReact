import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (username === 'divya' && password === '0715') {
      // Redirect to homepage
      navigate('/homepage');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container template d-flex flex-column justify-content-center align-items-center w-100 vh-100">
      <h2 className='text-white'>Login</h2>
      <div className='90-w p-5 rounded bg-muted bg-gradient'>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label className='mr-5 text-white'>Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group mb-2">
          <label className='text-white'>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary mt-2">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
