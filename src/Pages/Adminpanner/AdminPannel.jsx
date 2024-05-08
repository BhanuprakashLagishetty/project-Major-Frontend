
import './AdminPannel.css'
import axios from 'axios';
import React, { useState } from 'react'
function AdminPannel() {
   const [database,setDatabase]=useState("");   
  const [question,setquestion]=useState("");        
  const [answer,setAnswer]=useState("");
  const [difficulty,setDifficulty]=useState("");
  const handleSubmit= async (e)=>{
    
      e.preventDefault();
      try{

        const res= await axios.post("http://localhost:3000/api/admin/",{
          database,
          question,
          answer,
          difficulty
        })
        res.data && window.location.replace("/");
        console.log(res)
      }
      catch(err)
      {
        console.log(err)
       
      }


  }     
  return (
    <>
    <div className='AdminNav'>
      <h2>ADMIN ENTRY</h2>
    </div>
    <div className="adminMain">

    <div className="adminentry">
      <input type="text" placeholder='enter databasename'
         onChange={e =>setDatabase(e.target.value)} />
      <input type="text" placeholder='enter question'
        onChange={e =>setquestion(e.target.value)} />
      <input type="text" placeholder='enter correct answer'
        onChange={e =>setAnswer(e.target.value)}
        />
         <input type="text" placeholder='Enter the Difficulty level'
        onChange={e =>setDifficulty(e.target.value)}
        />
        <select name="" id="">
          <option value="">
            Easy
          </option>
          <option value="">
            Medium
          </option>
          <option value="">
            Hard
          </option>
        </select>
      <input type="submit"  className='adminsubmit' onClick={handleSubmit}/>
    </div>
    </div>
    </>
  )
}

export default AdminPannel