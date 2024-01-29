import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"
import { loginAdmi } from './ApiAuth';


function Login() {
  
 const [email, setEmail]= useState('')
 const [password, setPassword] = useState('')
//connection
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const result = await loginAdmi({email, password});
        console.log('Login successful:', result);
        const token = result.data.token;
       localStorage.setItem('token', token);
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    
  
  //   let navigate = useNavigate()
  // axios.defaults.withCredentials= true
  //   const handleSubmit = (e)=>{
  //     e.preventDefault();
  //     axios.post('https://localhost:8000/',{email,password}
  //     ).then(response=>{
  //     console.log(response);
  //     navigate('/dashome')
  //     }).catch(err=>{
  //         console.log(err);
  //     });
  // }

  return (
    <div className="d-flex login_fond justify-content-center align-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
    <h3 className='text-center'>conectez-vous en tant que admi</h3>
            <div>
                <form onSubmit={handleLogin}>
                 
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" className='form-control rounded-0' value={email}   name='email' placeholder='Enter your Email'
                          onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" className='form-control rounded-0' value={password}  name='password' placeholder='Enter your Password'
                          onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success w-100 border text-decoration-none   mt-3'>Sign In</button>
                </form>
                <p>
                <br /><br />
                <Link to="forgot-password">Forgot Password</Link>
                </p>
               <Link to="/signup" className='w-100 text-decoration-none bg-light btn btn-default rounded-0'>Sign Up</Link>
                
            </div>
       
    </div>
</div>
  )
}

export default Login