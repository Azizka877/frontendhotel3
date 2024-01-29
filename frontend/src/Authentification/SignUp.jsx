import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { registerAdmi } from './ApiAuth'


function SignUp() {
  const navigate = useNavigate()
  const [admiData, setAdmiData] = useState({
    name: '',
    email: '',
    password: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmiData({
      ...admiData,
      [name]: value,
    });
  };

          
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await registerAdmi(admiData);
      console.log('Registration successful:', result);
      navigate('/')
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  

  return (
    <div className="d-flex login_fond justify-content-center align-items-center  vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h3 className='text-center'>Inscrivez-vous en tant que admi</h3>
                    <form onSubmit={handleRegister} >
                    <div className="mb-4">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" className='form-control rounded-0'  name='name' placeholder='Enter your Name'
                              onChange={handleChange} value={admiData.name} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" className='form-control rounded-0'  name='email' placeholder='Enter your Email'
                              onChange={handleChange} value={admiData.email} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" className='form-control'  name='password' placeholder='Enter your Password'
                              onChange={handleChange} value={admiData.password} />
                        </div>
                        <button type='submit' className='btn btn-success w-100 border rounded-0 text-decoration-none mt-3'  >Sign Up</button>
                    </form>
                    <p> Already have an Account
                   <Link to="/" className='w-100 text-decoration-none bg-light btn btn-default rounded-0'>Sign In</Link>
                   </p>
        </div> 
    </div>
  )
}

export default SignUp