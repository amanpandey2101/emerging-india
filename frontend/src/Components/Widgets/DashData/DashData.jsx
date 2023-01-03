import React from 'react'
import Lodge from '../LodgeFIR/Lodge';
import MainDash from '../MainDash/MainDash';
import UserDash from '../MainDash/User/UserDash';
import Profile from '../Profile/Profile';

export default function DashData({value,setItem,setSelected}) {
    
    switch(value){
        case 'Dashboard': return(
            <UserDash setSelected = {setSelected} setItem = {setItem}/>
        )
        break;
        case  'Lodge': return(
            <Lodge/>
        )
        case 'Profile':return(
            <Profile/>
        )
        break;
        default: return(<UserDash/>)
    }
  
}
