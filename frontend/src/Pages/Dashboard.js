import React, { useState } from 'react'
import DashData from '../Components/Widgets/DashData/DashData';
import MainDash from '../Components/Widgets/MainDash/MainDash'
import Sidebar from '../Components/Widgets/Sidebar'
import './Dashboard.css'

export default function Dashboard() {
  const [item,setItem] = useState('Dashboard');
  const [selected, setSelected] = useState(0);
  

  return (
    <div className='Dash'>
      <div className="AppGlass">
        <Sidebar setItem={setItem} selected={selected} setSelected={setSelected} />
        <DashData value = {item}  setItem={setItem} setSelected={setSelected}/>
        
      </div>
    </div>
  )
}
