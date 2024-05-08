import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/Header'
import Coverphot  from './Components/Coverphoto/Coverphot';
import Selectdatabases from './Components/Selelctdatabases/Selectdatabases';
import QueryTable from './Components/QueryTable/QueryTable';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Practice from './Pages/Terminal/Practice';
import Terminal from './Components/Terminal/Terminal';
import AceEditor from "react-ace";
import Register from './Pages/Register/Register'
import { useContext } from "react";
import { Context } from "./context/Context";
import AdminPannel from './Pages/Adminpanner/AdminPannel';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProblemSolved from './Pages/ProblemSolved/ProblemSolved';
function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/"
      element={<Home/>}
       />
       <Route exact path="/:id"
          element={<Practice/>}
       />
       <Route exact path="/login"
          element={<Login/>}
       />
       <Route exact path="/register"
          element={<Register/>}
       />
       <Route exact path="/admin"
          element={<AdminPannel/>}
       />
       <Route exact path="/viewProblems"
       element={<ProblemSolved/>}
       />

      
    </Routes>
   </Router>
      
      

   
  );
}

export default App;
