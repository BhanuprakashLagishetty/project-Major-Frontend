import React from 'react'
import Header from '../../Components/Header/Header'
import Coverphot from '../../Components/Coverphoto/Coverphot'
import Selectdatabases from '../../Components/Selelctdatabases/Selectdatabases'
import QueryTable from '../../Components/QueryTable/QueryTable'
import  { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPost=async ()=>{
    
     

      
      const res=await axios.get("http://localhost:3000/api/admin/")
      console.log(res.data)
      setPosts(res.data)
    }
    fetchPost();
  },[])
  return (
    <div>
        <Header/>
        <Coverphot/>
        <Selectdatabases/>
        <QueryTable posts={posts}/>
    </div>
  )
}

export default Home