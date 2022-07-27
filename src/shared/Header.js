import React, { useState }from 'react';
import Logo from "../assests/image/logo.png";
import "./Header.scss";
import "./headerMedia.scss";
import {FaBars, FaChartLine, FaHome, FaTimes, FaUser} from "react-icons/fa";

const Header = () =>{

    const [toggle, setToggle] = useState(false);

    const toggleHandle = () => {
        setToggle(true);
    }
    const toggleClose = () =>{
        setToggle(false);
    }
    const headerTitle = {
         title : ["buy","rent","sold","new devlopments","price estimater","find agents","action results","advise","news","our networks","loans","conveyncing"],
         signin : "sign in",
         name : ["buy","rent","sold","new devlopments"],
         price : "price estimate",
         data : ["businesses","rural","holiday rental","find agents","action results","advise","news","loans","conveyncing","about us","contact us","terms of use","privacy policy"]
    }
  return (
    <div className='header'>
        <div className='bar-icon'>
        <FaBars className='icon--bar' onClick={toggleHandle}/> 
       
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

        <div className={`sidebar ${toggle === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <div className="close-icon" onClick={toggleClose}><FaTimes className='icon-close'/></div>
                        <div className='logo'>
                       <img src={Logo} alt="logo" className='logo-image'></img>
                     </div>
                     <div className='user-icon'><FaUser className='icon--user'/></div>
        </div>
        <div className='sidebar-wrapper'>
            {
                headerTitle.name.map((name) => (
                    <div className='sidebar-link' key={name}>
                        <div className='icons'>
                        <FaHome className='icon-home'/>
                        </div>
                        <div className='text-name'>{name}</div>  
                    </div>
                ))
            }
           <div className='sidebar-link'>
                        <div className='icons'>
                        <FaChartLine className='icon-home'/>
                        </div>
                        <div className='text-name'>{headerTitle.price}</div>  
          </div>
        </div>
        <div className='sidebar-data'>
            {
                headerTitle.data.map((data) => (
                    <div className='side-data' key={data}>
                        <div className='data-text'>{data}</div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>


  )
};
export default Header;
