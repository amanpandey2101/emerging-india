import React from 'react'
import MainDash from '../Components/Widgets/MainDash/MainDash'
import Sidebar from '../Components/Widgets/Sidebar'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className='Dash'>
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <div></div>
      </div>
    </div>
  )
}
