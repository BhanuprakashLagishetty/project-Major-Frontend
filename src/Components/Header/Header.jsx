import React, { useContext } from 'react'
import '../Header/Header.css'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
function Header() {
    const {user,dispatch}=useContext(Context)
    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
      }
  return (
    <div className="nav3">
    <div className="nav2" >
        <div className="specialconetent">
            <div className="logo">
                <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"  alt=""  width={"60px"} height={"60px"} className='logo1' />
            </div>
            <div className="content">
                <ul>
                    <Link to={"/"} style={{color:"black", textDecoration:"none"}}>
                    <li>Home</li>
                    </Link>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Start practice</li>
                    <li>Docs</li>
                    <li>Help</li>
                    { user && user.username=="Bhanuprakash Lagishetty" && <Link to={"/admin"} style={{color:"black", textDecoration:"none"}}>
                    <li>AdminEntry</li>
                    </Link>}
                </ul>
            </div>
        </div>
        <div className="leftcontent">
            <ul>
            {user ?(
             <li>
                    <div className="profile">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    </div>
                </li>
            ):
                <Link to={"/register"}><li ><button className="button">Login/Register</button></li></Link>
            }
            {user &&  <li ><button className="button" onClick={handleLogout}>Logout</button></li>}
               
                {/* <li ><button className="button">Sign up</button></li> */}

             
            </ul>
           
        </div>
    </div>
</div>
  )
}

export default Header