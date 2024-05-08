
import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
function ProblemSolved() {

  const [rank,setRank]=useState(0);
    const {user,dispatch}= useContext(Context)
    const [problems,SetProblems]=useState([]);
    const [userdetails,setUserDetails]=useState([])
    useEffect(() => {
        const fetchTables = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/userProblemsSolved`);
            setUserDetails(response.data);
            console.log(response.data+": use details");
            
          } catch (error) {
            console.error('Error fetching tables and data:', error);
          }
        };
      
    
        fetchTables();
      }, []);
      
    useEffect(() => {
        const fetchTables = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/findProblemSolvedByUsername/`+user.username);
            SetProblems(response.data);
            console.log(response.data+": this is my response");
            
          } catch (error) {
            console.error('Error fetching tables and data:', error);
          }
        };
    
        fetchTables();
      }, []);
      function sliceString(fullString, delimiterWord) {
        // Find the index of the delimiter word in the full string
        const delimiterIndex = fullString.indexOf(delimiterWord);
        
        // Slice the string before the delimiter if it exists
        // Otherwise, return the full string
        return delimiterIndex !== -1 ? fullString.slice(0, delimiterIndex) : fullString;
    }

    
  return (
    <>
       <div className='AdminNav'>
      <h2>Problmes Solved </h2>
      {
        userdetails.map((items,index)=>
        items._id==user.username &&(
            <h2> <i class="fa-solid fa-ranking-star" style={{marginRight:"10PX"}}></i>Rank {index+1}</h2>
         
      
           
        )
      )
      }
 
    </div>
    <div className="adminMain2">
    
    <h2> {user.username}</h2>
        {problems.map((problem, index) => (
            <div key={index} className='problemsDisplay'>
              
                <p><strong>Problem question solved:</strong> {sliceString(problem.question, "note")}</p>
            </div>
        ))}
    </div>
    </>

 
  )
}

export default ProblemSolved