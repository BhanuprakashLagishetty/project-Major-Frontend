import React from 'react'
import '../Terminal/Terminal.css'

function Tablecontent() {
  return (
    <div>
        <table class="table">
                        <tr>
                            <th style={{color:'black'}}>customer_id</th>
                            <th style={{color:'black'}}>firstname</th>
                            <th style={{color:'black'}}>Lastname</th>
                            <th style={{color:'black'}}>age</th>
                            <th style={{color:'black'}}>country</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>john</td>
                            <td>Doe</td>
                             <td>31</td>
                             <td>USA</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>john</td>
                            <td>Doe</td>
                             <td>31</td>
                             <td>USA</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>john</td>
                            <td>Doe</td>
                             <td>31</td>
                             <td>USA</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>john</td>
                            <td>Doe</td>
                             <td>31</td>
                             <td>USA</td>
                        </tr>
                    </table>
    </div>
  )
}

export default Tablecontent