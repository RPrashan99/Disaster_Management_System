import React from "react";
import {APIProvider, Map, AdvancedMarker, Marker} from '@vis.gl/react-google-maps';

export const GoogleMap = (props) => {

  const {shelters, requests, location} = props;

  const position = {lat: 7.291418, lng: 80.636696};

  return (
    <APIProvider apiKey={''}>
      <div style={{height: "90vh", width: "100vh"}}>
        <Map defaultZoom={7} defaultCenter={position}>
          <Marker position={{lat: 6.97078, lng: 80.78286}}/>
        </Map>
      </div>
    </APIProvider>
  );
};
