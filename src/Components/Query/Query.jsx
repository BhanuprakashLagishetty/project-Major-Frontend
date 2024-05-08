import React, { useEffect, useState } from 'react'
import '../Query/Query.css'
import  {Link} from 'react-router-dom'


function Query({post}) {
  
  return (
    <>
      <div class="roletable1 ro1">
                        <div class="status st"> 
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="titile">
                          <Link to={`/${post._id}`} className='link'>
                            <p className='desc'>
                              {post.question}
                            </p>
                          </Link>
                        </div>
                        <div class="slolution">
                            <i class="fa-solid fa-note-sticky"></i>
                        </div>
                        {
                          post.difficulty==="Easy" &&  <div class="difficulty df" style={{color:"green",  fontWeight:"bold"}}>
                          {post.difficulty}
                          </div>
                        }
                          {
                          post.difficulty==="Medium" &&  <div class="difficulty df" style={{ fontWeight:"bold"}}>
                          {post.difficulty}
                          </div>
                        }
                         {
                          post.difficulty==="Hard" &&  <div class="difficulty df" style={{color:"red", fontWeight:"bold"}}>
                          {post.difficulty}
                          </div>
                        }

                        
                
        </div>
    </>
  )
}

export default Query