import React from "react";
import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';

export const GoogleMap = () => {
  const position = {lat: 7.291418, lng: 80.636696};

  return (
    <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
      <div style={{height: "90vh", width: "100vh"}}>
        <Map zoom={7} center={position}/>
      </div>
    </APIProvider>
  );
};
