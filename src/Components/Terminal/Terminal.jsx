
import '../Terminal/Terminal.css'
import Tablecontent from './Tablecontent'
import React, { useEffect, useState,useContext } from 'react'
import {inspect} from "util";
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import AceEditor from "react-ace";

//EXPLOSION
import ConfettiExplosion from 'react-confetti-explosion';


// LANGUAGE MODES 
import "ace-builds/src-noconflict/mode-mysql";
// THEMES 
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { Context } from '../../context/Context';


const Terminal = () => {
  const {user,dispatch}= useContext(Context)
    const [textAreaValue, setTextAreaValue] = useState("");
    const [answerStatus,setAnswerStatus]=useState(false);
    const [columns,setColumns]=useState([])
    const [userdata,setUserdata]=useState([])
    const location=useLocation();
    const path = location.pathname.split('/')[1]
    const [post,setPost]=useState({})
    const [isExploding, setIsExploding] = useState(false);
    const [loading,setLoading]=useState(true)
    const [availableTable,setAvailabelTables]=useState([]);
    const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    };

   //extracting all table data

   useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tables/${path}`);
        setAvailabelTables(response.data.tableData);
        console.log("tabledata"+availableTable)
      } catch (error) {
        console.error('Error fetching tables and data:', error);
      }
    };

    fetchTables();
  }, []);
   //end of the extracting all table data
   
console.log(post.answer);
  useEffect(()=>{
    const getpost=async ()=>{
      const res=await axios.get(`http://localhost:3000/api/admin/${path}`)
      setPost(res.data)
    }
    getpost();
  },[path])
  const sendDataToBackend = async () => {
    setLoading(false);
    
    try {
      const response = await fetch('http://localhost:3000/api/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value : textAreaValue,
          correctanswer: post.answer,
          database:post.database
         }),
      });

      const data = await response.json();
      if(data)
      {
        setLoading(true)
      }
      console.log('Response from server bhanu:', data.success);
      setAnswerStatus(data.success);
      if(response.ok == 200 || data.success === "correct answer"){
        setIsExploding(true);
      setTimeout(() => {
        setIsExploding(false);
      }, 5000);  
      
      const response1 = await fetch('http://localhost:3000/api/saveSolvedProblems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username : user.username,
          question:post.question
         }),
      });


      }
      console.log(data);
      setColumns(Object.keys(data.output[0]))
      setUserdata(data.output)
      console.log(columns);
      
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

//display tables as tabels
const renderTable = (table) => {
  return (
    <div key={table.tableName}>
      <h3>{table.tableName}</h3>
      <table border="1">
        <thead>
          <tr style={{color:"black"}}>
            {Object.keys(table.data[0]).map((column, index) => (
              <th key={index} style={{color:"black"}}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  return (
    <div className='totalterminal'>
         <div class="templatecontent">
          {/* Available tables showing */}
          <h4>Question:</h4>
          <div class="question">
                <p>Q)
                
                  {post.question}
                 
                </p>
            </div>
        <div>
          <h3 style={{color:"gray"}}>Tables and Data in the Database:</h3>
              {availableTable.map(renderTable)}
        </div>
        </div>
        <div class="platform">
            <div class="platforminfo">
                { isExploding && <Bomb />}
                <p>Input</p>
                
            </div>
            {/* <div class="question">
                <p>Q) 
                  {post.question}
                </p>
            </div> */}
            <div class="template1">
            
                
                <AceEditor
                    mode="mysql"
                    theme={"twilight"}
                    onChange={setTextAreaValue}
                    width={'100%'}
                    height={'300px'}
                    value={textAreaValue}
                    fontSize={16}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: false }}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                      tabSize: 2,
                      }}
                />
                

                {/* <p style={{padding: "30px;color: brown;margin: 0;"}}>--Please fill the data</p> */}

            </div>
            <button class="button button4" onClick={sendDataToBackend} disabled={!loading}>runQuery</button>
            {
              answerStatus ==="correct answer" ? <h4 style={{color:'green'}}> {answerStatus} </h4>:<h4 style={{color:'red'}}> {answerStatus} </h4>
            }
            
          

            <div class="output">
                <div class="tableinfo">
                    
                    <table class="table">
                      <tr>
                        {
                        columns.map((c,i)=>(
                                <React.Fragment key={i}>
                                  <th style={{color:'black'}}>{c}</th>
                                   </React.Fragment>
                                 
                              ))
                          }
                        </tr>
                          {
                             userdata.map((c,i)=>(
                              
                            <tr >
                              {
                                columns.map((p,j)=>(
                                  <React.Fragment key={i}>
                                    <th style={{color:'black'}}>{c[p]}</th>
                                     </React.Fragment>
                                   
                                ))
                                }
                                </tr>
                            ))
                          }                         

                    </table>
                
                </div>

            </div>

        </div>


        
    </div>
  
  )
}

export default Terminal


const Bomb = () => {
  return (
    <ConfettiExplosion particleCount={200}/>
  )
}