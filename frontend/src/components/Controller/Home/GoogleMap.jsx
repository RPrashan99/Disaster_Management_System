import React, { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { getCurrentReports } from "../../../services/reportService";

export const GoogleMap = () => {
  const position = { lat: 7.291418, lng: 80.636696 };
  const [loc, setLoc] = useState({ lat: 7.291418, lng: 80.636696 });

  const [reports, setReports] = useState("");

  const fetchReports = async () => {
    try {
      const currentReports = await getCurrentReports();
      setReports(currentReports);
    } catch (error) {
      console.log("Reports fecth error", error);
    }
  };
  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(
    () => {
      if (reports) {
        console.log("Reports fetched: ", reports);
      }
    },
    [reports]
  );

  return (
    <div className="flex justify-between items-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex item-center justify-center  flex-wrap relative self-stretch w-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] flex-[0_0_auto] ">
        <APIProvider apiKey={"AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk"}>
          <div className=" shadow-sm flex border-[1rem]  border-y-[#525151] border-x-[#a5a9bd]  relative self-stretch lg:h-[100%] md:h-[100%] sm:h-[100%] w-[100%]">
            <Map Zoom={7} Center={position}>
              {reports &&
                reports.map((report, index) =>
                  <Marker
                    key={index}
                    position={{
                      lat: report.affectedLocations[0].latitude,
                      lng: report.affectedLocations[0].longitude,
                    }}
                  />
                )}
            </Map>
          </div>
        </APIProvider>
        {/* <img  className= 'border-l-[20px] border-l-ControllerSec border-b-[20px] rounded-l-full border-b-ControllerPrim shadow-sm flex  relative self-stretch lg:h-[98%] md:h-[98%] sm:h-[98%] w-[96%] flex-[0_0_auto] m-[1%] ' src='/controller/sriLankanMap.png' alt='Map'/> */}
      </div>
    </div>
  );
};
