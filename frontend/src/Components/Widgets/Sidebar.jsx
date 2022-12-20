import React from 'react'

import Logo from './images/ashokStambh.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [selected,setSelected] = useState(0)
  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                F<span>I</span>R
            </span>
        </div>
        {/* menu */}
        <div className="menu-sidebar">
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected === index?'menuItem active': 'menuItem'}
                    key={index}
                    onClick = {()=>setSelected(index)}
                    >
                <div>
                    <item.icon/>
                </div>
                <span>{item.heading}</span>
            </div>
                )
            })}
               <div className="menuItem">
                    <UilSignOutAlt/>
               </div>
        </div>
    </div>
  )
}

export default Sidebar