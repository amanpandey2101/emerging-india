import React from 'react'
import Logo from './images/ashokStambh.png'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({ setItem, selected, setSelected }) => {

    const handleSignOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
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
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active bg-blue-400' : 'menuItem'}
                            key={index}
                            onClick={() => {
                                setSelected(index);
                                setItem(item.heading);
                            }}
                        >
                            <div>
                                <item.icon />
                            </div>
                            <span>{item.heading}</span>
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt onClick={handleSignOut} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar