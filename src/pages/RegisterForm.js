import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";
import { CreateUser, Login } from '../services/auth';

const RegisterForm = () => {

    let navigate = useNavigate()
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
    console.log("Creating User");
  
    try {
      await CreateUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
  
      await Login({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      window.location.reload(true)
      navigate("/profile")
    } catch (error) {
      console.error(error);
      throw error;
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
