import {React,useEffect} from "react";
import axios from 'axios'
import { useState } from "react";
import ProfileCompleteCard from "../../Profile/ProfileCompleteCard";

export default function UserDash({setSelected,setItem}) {
    const [loading , setLoading] = useState(true);
    const [user, setUser] = useState({})
    const token = localStorage.getItem("token");
    const url = `http://localhost:3000/api`;
    const app = axios.create({
        baseURL:url
    })
    useEffect(() => {
        app.get(`/user/${token}`)
        .then(res=> res.data)
        .then(json=>{
            if(json.user){
                setLoading(false);
                setUser(json.user);
                console.log(json.user);
            } else {
                
            }
        }).catch(error =>{
                alert("Session Expired Please Relogin")
            
        })
        
    }, [])


    if(user.profileCompleted == 1){
        return(
            <div>Dashboard</div>
        )
    } else if(user.profileCompleted == 0) {return(<ProfileCompleteCard user = {user} setSelected={setSelected} setItem={setItem}/>)}
    else{
        return(
            <div>Loading</div>
        )
    }





}
