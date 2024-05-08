import React from 'react'
import '../QueryTable/QueryTable.css'
import Query from '../Query/Query'

function QueryTable({posts}) {
  return (
    <div className='totalTable'>
        <div className="tableinfo">

        
    <div class="roletable">
                    <div class="status">
                        Status
                    </div>
                    <div class="titile">
                        titile
                    </div>
                    <div class="slolution">
                        Solution
                    </div>
                    <div class="difficulty">
                        difficulty
                    </div>
        </div>

        {
            posts.map(p =>{
                return <Query post={p}/>
            })
        }
        
        <div style={{height:"200px"}}>

        </div>

      

    </div>
    </div>
  )
}

export default QueryTable