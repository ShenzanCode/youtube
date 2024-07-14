import React from 'react'
import "./Navebar.css"
import menu_icon from "../../assets/menu.png" 
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more_icons from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom'


const Navebar = ({setsidebar}) => {
  return (
    <nav className="flex-nave">
        <div className="nav-left flex-div">
            <Link to="/" className='menu-icon' onClick={()=>setsidebar(pre=>pre===false?true:false)} src={menu_icon} alt=""></Link>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="nave-middle flex-div">
            <div className="search_box flex-div">
            <input type="text" placeholder='Search..' />
            <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="" />
            <img src={more_icons} alt="" />
            <img src={notification_icon} alt="" />
            <img className='user_icon' src={profile_icon} alt="" />
        </div>
    </nav>
  )
}

export default Navebar