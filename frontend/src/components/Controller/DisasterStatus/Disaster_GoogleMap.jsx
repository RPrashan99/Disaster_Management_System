import React, { Component, useEffect, useState } from "react";
import {APIProvider, Map, AdvancedMarker, Marker} from '@vis.gl/react-google-maps';
import { getGeoCode } from "../../../services/mapService";

export const GoogleMap = (props) => {

  const {shelters, requests, location} = props;

  const position = {lat: 7.291418, lng: 80.636696};

  const [loc, setLoc] = useState({lat:7.291418,lng:80.636696});

  useEffect(() =>{
    const extractLatLang = async(location) =>{
      const result = await getGeoCode(location[0]);
      const lat = result.results[0].geometry.location.lat;
      const lang = result.results[0].geometry.location.lng;
      const marker = {lat:lat, lng:lang};
      setLoc(marker);
    }
    extractLatLang(location);
  },[location])

  useEffect(()=>{
    if(loc != null){
      //console.log("lat: ", loc.lat, "lng: ", loc.lng);
    }
  },[loc])

  return (
    <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
      <div style={{height: "95vh", width: "100vh"}}>
        <Map defaultZoom={8} defaultCenter={position}>
          <Marker position={loc}/>
          {/* {requests.map(request => {
            <Marker position={request.}
          })} */}
          {/* <Circle
            center={loc}
            radius={5000}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.35,
            }}
          /> */}
        </Map>
      </div>
    </APIProvider>
  );
};
