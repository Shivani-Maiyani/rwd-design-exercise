import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from "../../assests/image/logo.png";
import "./sidebar.scss";



const Sidebar = () => {
  return (
    <div>
      <div className='sidebar-wrraper'>
        <div className='sidebar-header'>
            <div className='icon-cross'>
            <FaTimes className='cross-icon'/>
            </div>
            <div className='sidebar-logo'>
              <img src={logo} alt="logo" className='sidebar-logo_image'/>
            </div>
        </div>

      </div>
    </div>
  )
}
export default Sidebar;