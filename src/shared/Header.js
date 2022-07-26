import React, { useState }from 'react';
import Logo from "../assests/image/logo.png";
import "./Header.scss";
import "./headerMedia.scss";
import {FaBars, FaUser} from "react-icons/fa";
import Sidebar from '../component/sidebar/sidebar';

const Header = () =>{

    const [toggle, setToggle] = useState(false);

    const toggleHandle = () => {
        setToggle(true);
        console.log("hiii");
    }
    const headerTitle = {
         title : ["buy","rent","sold","new devlopments","price estimater","find agents","action results","advise","news","our networks","loans","conveyncing"],
         signin : "sign in"
    }
  return (
    <div className='header'>
        <div className='bar-icon'>
        <FaBars className='icon--bar' onClick={toggleHandle}/> 
        {toggle && <Sidebar/>}      
        </div>
      
        <div className='logo'>
            <img src={Logo} alt="logo" className='logo-image'></img>
        </div>
        <div className='headerlink'>
        {
            headerTitle.title.map((title) => {
                return <div className='h-title' key={title}>{title}</div>
            })
        }
        </div>
        <div className='sign-in'>{headerTitle.signin}</div>
        <div className='user-icon'><FaUser className='icon--user'/></div>
    </div>
  )
};
export default Header;
