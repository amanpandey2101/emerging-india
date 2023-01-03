import { React, useEffect } from "react";
import axios from 'axios'
import "./Lodge.css";
import { useState } from "react";
import {UilLocationPinAlt} from '@iconscout/react-unicons'


export default function Lodge() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const token = localStorage.getItem("token");
    const url = `http://localhost:3000/api`
    const app = axios.create({
        baseURL: url
    })
    useEffect(() => {
        app.get(`/user/${token}`)
            .then(res => res.data)
            .then(json => {
                if (json.user) {
                    setLoading(false);
                    setUser(json.user);
                    console.log(json.user);
                } else {

                }
            }).catch(error => {
                alert("Session Expired Please Relogin")

            })

    }, [])



    if (loading) {
        return (
            <div>
                Loading
            </div>
        )
    } else
        return (
            <>
                <div className="lodge">
                    <div className="userInfo">
                        <div className="p-2 flex font-mono text-blue-600 ">
                            User Details
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Full Name
                                </span>
                                <input
                                    type="text"
                                    value={`${user.firstName} ${user.lastName}`}
                                    disabled
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                          "
                                />
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Phone Number
                                </span>
                                <input
                                    type="text"
                                    value={`+91 ${user.contactNumber}`}
                                    disabled
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "
                                />
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    State
                                </span>
                                <input
                                    type="text"
                                    value="Bihar"
                                    disabled
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    District
                                </span>
                                <input
                                    type="text"
                                    value="Patna"
                                    disabled
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    District
                                </span>
                                <input
                                    type="text"
                                    value="Patna"
                                    disabled
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            </label>
                        </div>
                        <p className="text-xs">*You Can Change These Information In Profile Section</p>
                    </div>
                    <div className="incident max-w-lg">
                        <div className=" p-2 flex font-mono text-blue-600 ">
                            Incident Details
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Date of Incidence
                                </span>
                                <input
                                    type="date"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Subject
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Short Cause"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                Respondent
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Respondent Name"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Persons Envolved In Incident
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Name of Persons Responsible For.. "
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Message
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Detailed Information about Incident "
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="p-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload Supporting Documents</label>
                            <input class="flex w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple/>
                        </div>
                    </div>
                    <div className="flex flex-col ml-3">
                    <div className="p-2 flex font-mono text-blue-600 ">
                            Additional Details
                        </div>
                    <div className="flex p-2">
                            <label class="block">
                                <span class="block text-sm font-bold text-slate-700">
                                    Time of Incidence
                                </span>
                                <input
                                    type="time"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2 gap-3">
                            <label class="block">
                                <span class="flex text-sm font-bold text-slate-700">
                                    <UilLocationPinAlt/>
                                    Location of Incidence
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Location"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                        <div className="flex p-2 gap-3">
                            <label class="block">
                                <span class="flex text-sm font-bold text-slate-700">
                                    Witness Details
                                </span>
                                <input
                                    type="text"
                                    placeholder="Wittness Names"
                                    class="mt-1 block w-full  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                            </label>
                        </div>
                    </div>

                </div>
            </>
        );
}
