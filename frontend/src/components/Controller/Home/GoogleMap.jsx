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

  const getNumberOfCircles = (severity) => {
    let numCircles=0;
    if(severity == "Low" ){
      numCircles=2;
    }else if(severity == "Medium"){
      numCircles = 3;
    }else if(severity == "High"){
      numCircles = 4;
    }

    let circles = '';
    for (let i = 1; i <= numCircles; i++) {
      circles += `
        <circle cx="20" cy="15" r="${5 * i}" stroke="red" stroke-width="2" fill="none">
          <animate attributeName="opacity" dur="1s" begin="${0.5*i}s" repeatCount="indefinite" keyTimes="0;0.5;1" values="1;0;1" />
        </circle>
      `;
    }
    return circles;
  }
  
  return (
    <div className="flex justify-between items-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex item-center justify-center  flex-wrap relative self-stretch w-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] flex-[0_0_auto] ">
        <APIProvider apiKey={"AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk"}>
          <div className=" shadow-sm flex border-[1rem]  border-y-[#525151] border-x-[#a5a9bd]  relative self-stretch lg:h-[100%] md:h-[100%] sm:h-[100%] w-[100%]">
            <Map Zoom={7} Center={position}>
              {reports &&
                reports.map((report, index) =>
                  <Marker className="blinking-icon"
                    key={index}
                    position={{
                      lat: report.affectedLocations[0].latitude,
                      lng: report.affectedLocations[0].longitude,
                    }}
                    icon={{
                      url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 40 30">
                          <circle cx="20" cy="15" r="5" fill="red"/>
                          ${getNumberOfCircles(report.severity)}
                        </svg>
                      `),
                      scaledSize: { width: 50, height: 50 }
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
