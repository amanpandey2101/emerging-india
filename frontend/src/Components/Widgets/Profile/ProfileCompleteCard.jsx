import React from 'react'
import './ProfileCard.css';

export default function ProfileCompleteCard({user,setSelected,setItem}) {
    return (
        <div className='self-center profileCard justify-center flex flex-col rounded-2xl shadow-lg' >
            <div className="firstParent flex flex-row mx-2">
                <div className='userImage'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" alt="userImage"
                    />
                </div>
                <div className='userDetailsCard'>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{`+91 ${user.contactNumber}`}</p>
                    <p>{user.email}</p>
                </div>
            </div>
            <p className='text-xs self-end mx-2 mt-3'>
                *Your Profile Is Not Completed Yet!
            </p>
            <button type="button" 
            onClick={()=>{
                setSelected(2)
                setItem('Profile')}}
            class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-medium rounded-lg text-sm text-white px-5 py-2.5 text-center m-3">Complete Profile</button>
        </div>

    )
}