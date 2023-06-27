import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Login } from '../services/auth';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await Login(formData);
    setFormData({
      name: '',
      email: '',
      password: ''
    });

    props.setUser(payload)
    if (payload) {
        props.setAuthenticated(true)
        navigate('/profile');
    } else {
      // Handle login error
      console.log("Login failed");
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
