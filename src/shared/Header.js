import React from 'react';
import Logo from "../assests/image/logo.png";
import "./Header.scss";
import {FaBars} from "react-icons/fa";

const Header = () =>{

    const headerTitle = {
         title : ["buy","rent","sold","new devlopments","price estimater","find agents","action results","advise","news","our networks","loans","conveyncing"],
         signin : "sign in"
    }
  return (
    <div className='header'>
        <div className='bar-icon'>
        <FaBars/>        
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
    </div>
  )
};
export default Header;
