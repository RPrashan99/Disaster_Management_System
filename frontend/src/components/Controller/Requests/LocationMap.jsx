import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { getCurrentReports } from "../../../services/reportService";

export const LocationMap = ({ latitude, longitude }) => {
  const position = { lat: latitude, lng: longitude };

  return (
    <div className="flex justify-between items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex item-center justify-center  flex-wrap relative self-stretch w-[100%] h-[100%] flex-[0_0_auto] ">
        <APIProvider apiKey={"AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk"}>
          <div className=" shadow-sm flex border-[5px] rounded-md  border-y-[#525151] border-x-[#a5a9bd] mx-10 relative self-stretch w-[100%] h-[100%]">
            <Map Zoom={7} Center={position}>
              {<Marker position={{ lat: latitude, lng: longitude }} />}
            </Map>
          </div>
        </APIProvider>
        {/* <img  className= 'border-l-[20px] border-l-ControllerSec border-b-[20px] rounded-l-full border-b-ControllerPrim shadow-sm flex  relative self-stretch lg:h-[98%] md:h-[98%] sm:h-[98%] w-[96%] flex-[0_0_auto] m-[1%] ' src='/controller/sriLankanMap.png' alt='Map'/> */}
      </div>
    </div>
  );
};
