import React from "react";
import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';

export const GoogleMap = () => {
  const position = {lat: 7.291418, lng: 80.636696};

  return (
    <APIProvider apiKey={'AIzaSyB1POitDbSJVck_L2fehxcu5ng5THk6TP4'}>
      <div style={{height: "90vh", width: "100vh"}}>
        <Map zoom={7} center={position}/>
      </div>
    </APIProvider>
  );
};
