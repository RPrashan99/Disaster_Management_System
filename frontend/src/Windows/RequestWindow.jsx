import React, { useEffect} from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { Button } from "../components/Controller/common/Button";
import { MdPermMedia } from "react-icons/md";

export const WindowComponent = ({requestID,requesterName, disasterLocation, disasterType, affectedCount, medicalNeed, otherNeeds}) => {
  console.log('Request Details:', requestID);

  useEffect(() => {
    console.log("requestDetails:", requestID);

  },[requestID]);

  return (
    <div>
      <div className="p-5">
          {Button("/controller/requests")}
      </div>
      <div className="px-5 ">
        <form className=" bg-[#cecdcd] pt-10 m-10 text-gray-900 font-semibold text-base">  
          <h1 className=" text-center font-bold m-3">
            <span className="text-3xl md:text-5xl mr-3 mt-10">
              Notified Disaster
            </span>
            <span className="w-full px-3 py-2 h-full font-bold rounded-[50px] bg-ControllerSec text-[#ffffff] text-2xl md:3xl">verified</span>
            <br />
            {requestID}
          </h1>
          <div className="grid grid-cols-2 d:grid-cols-2 items-center justify-center ml-5 ">
            <div className=" flex flex-col relative m-5 gap-3">
                <div className="flex relative flex-row items-center justify-start px-1">
                  <label className="block mx-1 my-2 w-[50%]">Name</label>
                  <text type="text" id="name" className="block p-2.5 mx-3 w-full  text-gray-900 bg-gray-50  text-sm rounded-lg border-b-4 border-gray-300">{requesterName}</text>
                </div>
    
                <div className="flex relative flex-row items-center justify-start px-1">
                  <label className="block mx-1 my-2 w-[50%]">Location</label>
                  <text type="text" id="location" className="block ml-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"> {disasterLocation}</text>
                  <a
                      type= "view" 
                      href="https://www.google.com/maps/"
                      className="flex relative cursor-pointer text-white bottom-1 bg-ControllerPrim hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-sm p-1 mt-2 "
                  >
                    <FaMapMarkedAlt className="w-6 h-6" />
                  </a>
                </div>
                <div className="flex relative flex-row items-center justify-start px-1">
                  <label htmlFor="countries" className="block mx-1 my-2 w-[50%]">
                    Type of Emergency
                  </label>
                  <text
                    id="emergency_type"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"       
                  > {requestID ? (
                    <div>
                      <p>{disasterType}</p>
                    </div>
                  ) : (
                    <p>No request details available.</p>
                  )}</text>
                </div>
                <div className="flex relative flex-row items-center justify-start px-1">
                  <label className="block mx-1 my-2 w-[50%]">No of people effected</label>
                  <text
                    id="No_of_people_effected"
                    className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  >{affectedCount}</text>
                </div>
              <div className="flex items-center relative flex-row justify-start px-1">
                <label className="block mx-1 my-2 w-[50%]">Medical Needs</label>
                <text
                  id="country-option-1"
                  values={medicalNeed}
                  className="block p-2.5 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                >{medicalNeed.toString()}</text>

              </div>
              <div className="flex items-center relative flex-row justify-start px-1" >
                <label htmlFor="message" className="block mx-1 my-2 w-[50%]">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  placeholder="If you need any special thing to say..."
                >{otherNeeds}</textarea>
              </div>
            </div>
            <div>
              <div className="flex w-full py-3 px-5">
                  <label htmlFor="dropzone-file"
                    className="flex items-center justify-center flex-col w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                    <div className="flex flex-col items-center justify-center py-3">
                      {}
                      <MdPermMedia />
                      <p className="mb-2 text-sm text-gray-500 ">
                        <span className="font-semibold">Click to view</span>
                      </p>
                      <p className="text-xs text-gray-500 ">Watch uploaded images or videos</p>
                    </div>
                  </label>
                </div>
              <div className="flex flex-row relative px-5 py-3 w-full">
                <label className="block mx-5 my-2 w-[20%]">
                    Voice Message
                </label>
                <div className="flex w-[40%]">
                    <span className="inline-flex relative items-center px-3 text-sm text-gray-900 bg-ControllerPrim border rounded-e-0 border-gray-300 rounded-s-md ">
                      <FaMicrophone className="w-5 h-5 bg-white" />
                    </span>
                    <text
                      type=""
                      id=""
                      className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-black focus:black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"/>
                </div>
              </div>
            </div>
          </div>     
        </form>
      </div>
    </div>
  )
}