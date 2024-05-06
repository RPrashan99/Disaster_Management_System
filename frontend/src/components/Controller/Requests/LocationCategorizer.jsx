import React, { useEffect, useState } from 'react';

function LocationCategorizer({location}) {
//   const [locationsInSriLanka, setLocationsInSriLanka] = useState([place]);
  const [province, setProvince] = useState(['Unknown']);


    async function getProvince(location) {
      const apiKey = 'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)},Sri%20Lanka&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const provinceComponent = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
          if (provinceComponent) {
            setProvince( provinceComponent.long_name);
          } else {
            setProvince('Unknown');
          }
        }
      } catch (error) {
        console.error('Error fetching province:', error);
        return 'Unknown';
      }
    }

    // async function fetchProvince() {
    //     const province = await getProvince(location);
    //     setCategorizedLocations(province);
    //   }

  getProvince(location);


  return province;
}

export default LocationCategorizer;
