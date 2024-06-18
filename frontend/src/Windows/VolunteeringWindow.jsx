import React, { useEffect, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { Button } from "../components/Controller/common/Button";
import { MdPermMedia } from "react-icons/md";
import { BackButton } from "../components/Common/BackButton";
import { updateVolunteerVerification } from "../services/volunteeringService";

export const VolunteeringWindow = ({
  volunteerID,
  fullName,
  age,
  nicNumber,
  address,
  email,
  phoneNumber,
  skills,
  experience,
  motivation,
  status,
}) => {
  console.log("volunterrDetails:", volunteerID);
  const [IsVerified, setIsVerified] = useState(status);

  useEffect(
    () => {
      console.log("volunterrDetails:", volunteerID);
    },
    [volunteerID]
  );

  const handleVerification = async e => {
    e.preventDefault();
    const newStatus = !(IsVerified == "Verified") ? "Verified" : "Unverified";

    try {
      await updateVolunteerVerification(volunteerID, newStatus);
      console.log(`Volunteer ${volunteerID} status updated to ${newStatus}`);
      setIsVerified(newStatus);
    } catch (error) {
      console.error("Failed to update volunteer status:", error);
      // Optionally, revert the state change if the update fails
      setIsVerified(newStatus);
    }
  };

  return (
    <div>
      <div className="px-16 pt-10">
        {<BackButton href={"/controller/volunteering"} header={"Back"} />}
      </div>
      <div className="px-5 ">
        <form className="bg-blue-100 border-[15px] border-gray-400 pt-10 m-10 text-gray-900 shadow-md font-semibold text-base">
          <h1 className=" text-center shadow-md bg-white font-bold mx-5 mb-5">
            <span className="text-2xl md:text-4xl mr-3 mt-10">
              Volunteer Details
            </span>
            <span className="text-2xl md:text-3xl text-ControllerSec ">
              {volunteerID}
            </span>
          </h1>
          <h2 className=" text-center font-bold m-3 text-2xl">
            <span className="w-full px-3 py-2 m-3 h-full font-bold rounded-3xl bg-ControllerSec text-black shadow-md text-xl md:2xl">
              {IsVerified}
            </span>
          </h2>
          <div className="flex flex-col items-center justify-center ">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 ">
              <div className="flex flex-col gap-2 justify-center m-5 mt-10">
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 my-2 w-[20%] ">Full Name</label>
                  <text
                    type="text"
                    id="name"
                    className="block p-2.5 mx-3 w-[60%] text-gray-600 bg-gray-50  text-sm rounded-lg border-b-4 border-gray-400"
                  >
                    {fullName}
                  </text>
                </div>
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 w-[20%] my-2 ">NIC Number</label>
                  <text
                    type="text"
                    id="nicNumber"
                    className="block p-2.5 w-[60%] mx-3 border-b-4 text-sm text-gray-600 bg-gray-50 rounded-lg border-gray-400"
                  >
                    {" "}{nicNumber}
                  </text>
                </div>
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 w-[20%] my-2 ">Age</label>
                  <text
                    type="text"
                    id="age"
                    className="block p-2.5 w-[60%] mx-3 border-b-4  text-sm text-gray-600 bg-gray-50 rounded-lg border-gray-400"
                  >
                    {" "}{age}
                  </text>
                </div>
              </div>
              <div className="flex flex-col justify-between m-5 mt-10">
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 my-2 w-[20%]">Email</label>
                  <text
                    type="text"
                    id="email"
                    className="block p-2.5 mx-3 border-b-4 w-[60%] text-sm text-gray-600 bg-gray-50 rounded-lg border-gray-400"
                  >
                    {" "}{email}
                  </text>
                </div>
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 my-2 w-[20%]">
                    Phone Number
                  </label>
                  <text
                    type="text"
                    id="phoneNumber"
                    className="block p-2.5 w-[60%] mx-3 border-b-4 text-sm text-gray-600 bg-gray-50 rounded-lg border-gray-400"
                  >
                    {" "}{phoneNumber}
                  </text>
                </div>
                <div className="flex relative flex-row items-center justify-center px-3">
                  <label className="block mx-1 my-2 w-[20%]">Address</label>
                  <text
                    id="Address"
                    className="block p-2.5 text-sm w-[60%] mx-3 border-b-4 text-gray-600 bg-gray-50 rounded-lg  border-gray-400"
                  >
                    {address}
                  </text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full py-3 px-5 gap-3">
              <div className="flex items-center relative flex-row justify-center px-3">
                <label className="block mx-1 my-2 w-[10%]">Skills</label>
                <text
                  id="skills"
                  className="block p-2.5 text-sm w-[80%] text-gray-600 bg-gray-50 rounded-lg border-b-4 border-gray-400"
                >
                  {skills}
                </text>
              </div>
              <div className="flex items-center relative flex-row justify-center px-3">
                <label className="block mx-1 my-2 w-[10%]">Experience</label>
                <text
                  id="experience"
                  className="block p-2.5 text-sm w-[80%] text-gray-600 bg-gray-50 rounded-lg border-b-4 border-gray-400"
                >
                  {experience}
                </text>
              </div>
              <div className="flex items-center relative flex-row justify-center px-3">
                <label className="block mx-1 my-2 w-[10%]">Motivation</label>
                <text
                  id="motivation"
                  className="block p-2.5 text-sm w-[80%] text-gray-600 bg-gray-50 rounded-lg border-b-4 border-gray-400"
                >
                  {motivation}
                </text>
              </div>
              <div className="flex relative flex-row items-center justify-end p-5 pr-20">
                <button
                  className="py-2 px-5 bg-userBlue hover:bg-blue-800 shadow-md shadow-black rounded-md text-white"
                  onClick={handleVerification}
                >
                  {IsVerified == "Verified" ? "Deny" : "Admit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
