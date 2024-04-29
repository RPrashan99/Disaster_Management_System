import React, { useEffect, useState } from 'react';

function LocationCategorizer({location}) {
//   const [locationsInSriLanka, setLocationsInSriLanka] = useState([place]);
  const [categorizedLocations, setCategorizedLocations] = useState([]);

  useEffect(() => {
    async function getProvince(location) {
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)},Sri%20Lanka&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const provinceComponent = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
          if (provinceComponent) {
            return provinceComponent.long_name;
          }
        }

        return 'Unknown';
      } catch (error) {
        console.error('Error fetching province:', error);
        return 'Unknown';
      }
    }

    async function fetchProvince() {
        const province = await getProvince(location);
        setCategorizedLocations(province);
      }

    fetchProvince();
  }, [categorizedLocations]);

  return null;
}

export default LocationCategorizer;
