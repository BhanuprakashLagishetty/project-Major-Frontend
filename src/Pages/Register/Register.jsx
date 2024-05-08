import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Register() {
  const [username,setUsername]=useState("");   
  const [password,setPassword]=useState("");        
  const [email,setEmail]=useState("");
  const [error,setError]=useState(false)
  const handleSubmit= async (e)=>{
    setError(false)
      e.preventDefault();
      try{

        const res= await axios.post("http://localhost:3000/api/auth/register",{
          username,
          email,
          password
        })
        res.data && window.location.replace("/login");
        console.log(res)
      }
      catch(err)
      {
        console.log(err)
        setError(true)
      }


  }        

  return (
    <div className='Login'>
        <form className='loginform' onSubmit={handleSubmit}>
        
            <input type="text" placeholder='Enter the username'
            onChange={e =>setUsername(e.target.value)}
            />
            
            <input type="email" placeholder='Enter the email'
              onChange={e =>setEmail(e.target.value)}

            />
          
            <input type="password" placeholder='Enter your passowrd'
            onChange={e =>setPassword(e.target.value)}

            />

            <button className='loginRegisterButton'>Register</button>
            {
              error && (<span style={{color:'red'}}>some thing went wront!</span>)
            }
            <span className='register'>already having the account ? <Link to={'/login'} style={{color:'skyblue'}}>Login</Link></span>
          
        </form>
    </div>
  )
}

export default Register