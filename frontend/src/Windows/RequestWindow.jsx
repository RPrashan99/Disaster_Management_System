import React, { useEffect, useState } from "react";
import { MdPermMedia } from "react-icons/md";
import { BackButton } from "../components/Common/BackButton";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { LocationMap } from "../components/Controller/Requests/LocationMap";

export const WindowComponent = ({
  requestID,
  requesterName,
  disasterLocation,
  disasterType,
  affectedCount,
  medicalNeed,
  otherNeeds,
  verification,
  locationLatLan,
}) => {
  const lat = parseFloat(locationLatLan[0]);
  const lng = parseFloat(locationLatLan[1]);
  const position = { lat: lat, lng: lng };
  useEffect(
    () => {
      console.log("position",position);
      console.log("requestDetails:", requestID);
      console.log("requestLocationLatLon:", locationLatLan);
    },
    [requestID]
  );

  return (
    <div>
      <div className="px-5 ">
        {<BackButton href={"/controller/requests"} header={"Back"} />}
      </div>
      <div className="px-5">
        <form className=" bg-blue-100 pt-10 m-5 shadow-md border-[15px] border-gray-400 text-gray-900 font-semibold text-base">
          <h1 className=" text-center font-bold mx-5 bg-white p-1 shadow-md">
            <span className="text-2xl md:text-4xl mr-3 mt-10">
              Notified Disaster
            </span>
            <span className="text-2xl md:text-3xl text-ControllerSec ">
              {requestID}
            </span>
          </h1>
          <h2 className=" text-center font-bold m-5 text-2xl">
            <span className="w-full px-3 py-2 m-5 h-full font-bold rounded-3xl bg-ControllerSec text-black shadow-md text-xl md:2xl">
              {verification}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full pb-10 pt-10 items-center justify-center ml-5 ">
            <div className=" flex flex-col relativem-5 mb-1 gap-3">
              <div className="flex relative flex-row items-center justify-start px-1">
                <label className="block mx-1 my-2 w-[50%]">Name</label>
                <text
                  type="text"
                  id="name"
                  className="block p-2.5 mx-1 w-full  text-gray-600 bg-gray-50  text-sm rounded-lg border-b-4 border-gray-400"
                >
                  {requesterName}
                </text>
              </div>

              <div className="flex relative flex-row items-center justify-start px-1">
                <label className="block mx-1 my-2 w-[50%]">Location</label>
                <text
                  type="text"
                  id="location"
                  className="block mx-1 p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border-b-4 border-gray-400"
                >
                  {" "}{disasterLocation}
                </text>
              </div>

              <div className="flex relative flex-row items-center justify-start px-1">
                <label htmlFor="countries" className="block mx-1 my-2 w-[50%]">
                  Type of Emergency
                </label>
                <text
                  id="emergency_type"
                  className="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border-b-4 border border-gray-400"
                >
                  {" "}{requestID
                    ? <div>
                        <p>
                          {disasterType}
                        </p>
                      </div>
                    : <p>No request details available.</p>}
                </text>
              </div>
              <div className="flex relative flex-row items-center justify-start px-1">
                <label className="block mx-1 my-2 w-[50%]">
                  No of people effected
                </label>
                <text
                  id="No_of_people_effected"
                  className="block p-2.5 text-sm w-full text-gray-600 bg-gray-50 rounded-lg border border-b-4 border-gray-400"
                >
                  {affectedCount}
                </text>
              </div>
              <div className="flex items-center relative flex-row justify-start px-1">
                <label className="block mx-1 my-2 w-[50%]">Medical Needs</label>
                <text
                  id="country-option-1"
                  className="block p-2.5 text-sm w-full text-gray-600 bg-gray-50 rounded-lg border border-b-4 border-gray-400"
                >
                  {medicalNeed.toString()}
                </text>
              </div>
              <div className="flex items-center relative flex-row justify-start px-1">
                <label htmlFor="message" className="block mx-1 my-2 w-[50%]">
                  Your message
                </label>
                <text
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 border rounded-lg border-b-4 border-gray-400"
                >
                  {otherNeeds}
                </text>
              </div>
              <div className="flex w-[60%] self-center h-full py-1 px-2">
                <label
                  htmlFor="dropzone-file"
                  className="flex items-center justify-center flex-col w-full border border-b-4 border-gray-400 rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center py-3">
                    {}
                    <MdPermMedia />
                    <p className="mb-2 text-sm text-gray-500 ">
                      <span className="font-semibold">Click to view</span>
                    </p>
                    <p className="text-xs text-gray-500 ">
                      Watch uploaded images or videos
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col h-full justify-center items-center">
              <div className="flex w-full h-full py-1 px-5">
                {/* <LocationMap 
                  latitude={7.291418} 
                  longitude={80.636696 }

                /> */}
                <div className="flex justify-between items-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex item-center justify-center  flex-wrap relative self-stretch w-[100%] h-[100%] flex-[0_0_auto] ">
                    <APIProvider
                      apiKey={"AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk"}
                    >
                      <div className=" shadow-sm flex border-[10px] rounded-md  border-y-userBlue border-x-[#a5a9bd] mx-10 relative self-stretch w-[100%] h-[100%]">
                        <Map Zoom={7} Center={position}>
                          {
                            <Marker
                              position={{  lat: lat, lng: lng  }}
                            />
                          }
                        </Map>
                      </div>
                    </APIProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
