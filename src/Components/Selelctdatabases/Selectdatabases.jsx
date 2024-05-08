import React from 'react'
import '../Selelctdatabases/SelectDatabases.css'
import Singledatabase from '../Singledatabase/Singledatabase'

function Selectdatabases() {
  return (
    <div>
          <div className="choosetopic">
            <h3>choosetopic</h3>
            <div className="topics">
                <Singledatabase name={"Sailors"} />
                <Singledatabase name={"Employee"}/>
                <Singledatabase name={"Teachers"}/>
                <Singledatabase name={"Department"}/>
                <Singledatabase name={"Doctors"}/>
                <Singledatabase name={"Administration"}/>
                <Singledatabase name={"School"}/>
                <Singledatabase name={"Hospital"}/>
                <Singledatabase name={"Children"}/>
               

             

            </div>
    </div>
    </div>
  )
}

export default Selectdatabases