import React, { useEffect, useState} from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { Button } from "../components/Controller/common/Button";
import { MdPermMedia } from "react-icons/md";
import { BackButton } from "../components/Common/BackButton";

export const VolunteeringWindow = ({volunteerID, fullName,age, nicNumber, address, email, phoneNumber,skills, experience,motivation}) => {
    
    const [IsVerified, setIsVerified] = useState(false);    

    useEffect(() => {
        console.log("volunterrDetails:", volunteerID);
    },[volunteerID]);

    const handleVerification=()=>{
        {IsVerified? (
            setIsVerified(false)
        ):(
            setIsVerified(true)
        )}
    };

    return (
        <div>
            <div className="p-5">
                {<BackButton href={"/controller/volunteering"} header={"Back"}/>}
            </div>
            <div className="px-5 ">
                <form className=" bg-[#cecdcd] pt-10 m-10 text-gray-900 font-semibold text-base">  
                    <h1 className=" text-center font-bold m-3">
                        <span className="text-3xl md:text-5xl mr-3 mt-10">
                        Volunteer Details
                        </span>
                        {IsVerified? ( <span className="w-full px-3 py-2 h-full font-bold rounded-[50px] bg-ControllerSec text-[#ffffff] text-2xl md:3xl">verified</span>)
                        :("")}
                        <br />
                        {volunteerID}
                    </h1>
                    <div className="grid grid-cols-2 d:grid-cols-2 items-center justify-center ml-5 ">
                        <div className=" flex flex-col relative m-5 gap-3">
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Full Name</label>
                                <text type="text" id="name" className="block p-2.5 mx-3 w-full  text-gray-900 bg-gray-50  text-sm rounded-lg border-b-4 border-gray-300">{fullName}</text>
                            </div>
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">NIC Number</label>
                                <text type="text" id="nicNumber" className="block ml-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"> {nicNumber}</text>
                            </div>
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Age</label>
                                <text type="text" id="age" className="block ml-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"> {age}</text>
                            </div>
                            <div className="flex items-center relative flex-row justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Skills</label>
                                <text id="skills"  className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                >{skills}</text>
                            </div>
                            <div className="flex items-center relative flex-row justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Experience</label>
                                <text id="experience" className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                >{experience}</text>
                            </div>
                            <div className="flex items-center relative flex-row justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Motivation</label>
                                <text id="motivation" className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                >{motivation}</text>
                            </div>
                            <div className="flex items-center relative flex-row justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Experience</label>
                                <text id="experience" className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                >{experience}</text>
                            </div>
                        </div>
                        <div className="flex flex-col w-full py-3 px-5">
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Email</label>
                                <text type="text" id="email" className="block ml-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"> {email}</text>
                            </div>
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Phone Number</label>
                                <text type="text" id="phoneNumber" className="block ml-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"> {phoneNumber}</text>
                            </div>
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <label className="block mx-1 my-2 w-[50%]">Address</label>
                                <text id="Address" className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                >{address}</text>
                            </div>
                            <div className="flex relative flex-row items-center justify-start px-1">
                                <button className="py-2 px-5 bg-ControllerSec shadow-md" onClick={handleVerification()}>{IsVerified? "DisVerify":"Verify"}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
    );
}