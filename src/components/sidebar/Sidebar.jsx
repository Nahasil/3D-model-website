import React from 'react'

import { IoHome } from 'react-icons/io5';
import { FiEdit } from "react-icons/fi";

import './sidebar.css'
function Sidebar() {
  return (
      <div className='main'>
          <div className='icon'>
              <IoHome />
          </div>
          <div className='icon'>
              <FiEdit />
          </div>
          
    </div>
  )
}

export default Sidebar
