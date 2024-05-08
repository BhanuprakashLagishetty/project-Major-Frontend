import React, { useState,useEffect } from 'react'
import axios from 'axios';

function RankingTable() {
    const [userdetails,setUserDetails]=useState([])
    useEffect(() => {
        const fetchTables = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/userProblemsSolved`);
            setUserDetails(response.data);
            console.log(response.data+": this is my response");
            
          } catch (error) {
            console.error('Error fetching tables and data:', error);
          }
        };
    
        fetchTables();
      }, []);
  return (
    <div className='Table'>
        <table className='tablecontent'>
        <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>solved problems</th>
            </tr>
            {userdetails.map((problem, index) => (
            <tr key={index} className='problemsDisplay'>
                <td>{problem.totalProblemsSolved}</td>
            </tr>
        ))}
         
            {/* <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr> */}
        </table>
    </div>
  )
}

export default RankingTable