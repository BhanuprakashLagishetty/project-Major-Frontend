
import React, { useContext,useState,useEffect } from 'react'

import '../Coverphoto/Coverphoto.css'
import RankingTable from './RankingTable/RankingTable';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Coverphot() {
    const {user,dispatch}= useContext(Context)
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

  return (
    <div className="main">
    <div className="mainimage">
        <img src="https://www.netlify.com/images/home/composable-platform-stack-shells.svg" alt="" />
        {user ?  user.username=="Bhanuprakash Lagishetty" ? <h2 className='username'>Hii {user.username}(admin) !</h2>: <h2 className='username'>Hii {user.username} !</h2> : <h2 className='username'>Hii Guest !</h2>  }
        
        <div className="h1">
            <h1>

                SQL QUERY PRACTICE PLATFORM
            </h1>
            <p>sql query practice platform is the user friend and easy to use platform where we can able to write quries and execute queries</p>
           <Link to={{ pathname: '/viewProblems' ,state: { userdetails } }} className='solvedbutton'>view Problems solved by users</Link>
        </div>

    </div>
    <div className="tablecontent">
        <h2>Top students</h2>
        <table className='coverphototable' style={{border:"1px solid white"}}>
        <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>solved problems</th>
            </tr>
            {

            userdetails.map((items,index)=>(
                <tr>
                    <td>{items._id}</td>
                    <td>{index+1}</td>
                    <td>{items.totalProblemsSolved}</td>

                </tr>

            ))
            }
      
        </table>
    </div>
        
    </div>
 
  )
}

export default Coverphot;