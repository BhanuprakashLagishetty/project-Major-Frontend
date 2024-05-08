import React, { useContext, useRef } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { Context } from '../../context/Context';

function Login() {

  const userRef =useRef();
  const passwordRef =useRef();
  const {dispatch,isFetching}=useContext(Context)
  const handleSubmit =  async(e)=>{
    e.preventDefault()
    dispatch({type: "LOGIN_START"});
    try{
      const res= await axios.post("http://localhost:3000/api/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS",payload:res.data});
      res.data && window.location.replace("/");

    }
   catch(err)
    {
      dispatch({type: "LOGIN_FAILURE"});

    }
  }

  return (
    <div className='Login'>
        <form className='loginform' onSubmit={handleSubmit} >
            <label>Username</label>
            <input type="text" placeholder='Enter the username...'
              ref={userRef}
              
             />
            <label>Password</label>
            <input type="password" placeholder='Enter your Password'
              ref={passwordRef}
             />

            <button className='loginRegisterButton' type='submit' disabled={isFetching}>Login</button>
        <span className='register'>don't having the account  <Link to={'/register'} style={{color:'skyblue'}}>create account</Link></span>
        </form>
    </div>
  )
}

export default Login
