import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { getGeoCode } from '../../../services/mapService'

const Weather =() => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [location, setLocation] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [forecast, setForecast] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  // const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; 

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLat(latitude);
            setLon(longitude);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
        message.error('Geolocation is not supported by this browser.');
      }
    };
    getLocation();

  }, []);

    useEffect(() => {
    if (lat && lon) {
      fetchWeatherData(lat, lon);
      fetchForecastData(lat, lon);
    }
  }, [lat, lon]);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    setWeatherData(response.data);
    console.log("data", response.data.current)
    } catch (error) {
    console.error('Error fetching weather data', error);
    }
  };

  const fetchForecastData = async (latitude, longitude) => {
    try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`   
    );
    setForecast(response.data.daily);
    console.log("data", response.data.daily)
    } catch (error) {
    console.error('Error fetching forecast data', error);
    }
  };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   try{
  //     if (lat && lon) {
  //       fetchWeatherData(lat, lon);
  //       fetchForecastData(lat, lon);
  //     }
  //   }catch(error){

  //   }
        
  // };
  const handleSearch = async(e) => {
        e.preventDefault();
        try {
          setIsSearched(true);
          const result = await getGeoCode(searchLocation);
          console.log('Geocode result:', result);
          if (result && result.results && result.results.length > 0) {
            const latitude = result.results[0].geometry.location.lat;
            const longitude = result.results[0].geometry.location.lng;
            setLocation(searchLocation);
            setLat(latitude);
            setLon(longitude);
            setSearchLocation('');
          } else {
            console.error('No results found for the given location');
            message.error('No results found for the given location');
          }
        } catch (error) {
          console.error('Error fetching geocode data', error);
          message.error('Error fetching geocode data. Enter a correct location');
        }
      };


    return(
        <div className='w-full h-full text-white text-[0.8rem] bg-blur-md bg-cover bg-center bg-[url("../../controller/w-10.jpg")] '>
          {weatherData && (
            <div className='flex justify-center mt-5 mb-0 '>
              <div className='grid grid-cols-1 relative items-center p-5 pb-0 rounded-[1rem] justify-center md:grid-cols-2 gap-2  h-full bg-transparent '>
                 <div className='flex  bg-transparent flex-col p-5 m-10 m-1 md:m-5 rounded-[1rem] justify-center   items-center content-center  '>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} alt='' className=' rounded-[50%]  bg-ControllerSec justify-center w-32 h-32'/>
                    <div className='flex flex-cols justify-center p-5 gap-2 pb-0 items-center '>
                        <img src='../../controller/icons-weatherLocation.png' alt='' className=' w-10 h-10'/>
                        {isSearched?(
                          <h2 className="md:text-[2.5rem] text-lg font-bold text-white justify-center">{(location)}</h2>
                          ):(<h2 className="md:text-[2.5rem] text-lg font-bold text-white justify-center">{(weatherData.timezone).split('/')[1]}</h2>)}
                    </div>
                    <p className=' justify-center text-md md:text-2xl'> {weatherData.current.weather[0].description}</p>
                  </div>
                <div className='flex flex-col py-5 pb-0 rounded-[1rem] bg-transparent backdrop-blur-2xl shadow-2xl shadow-white'> 
                    <div className='flex flex-col h-1/2 justify-center items-center p-2 bg-transparent  text-center '>      
                      <p className='text-3xl md:text-[3.5rem] font-bold font-sans'> {(weatherData.current.temp - 273.15).toFixed(0)}°C</p>
                      <p className='text-lg md:text-[1rem] font-bold font-sans p-2'>Feels like {(weatherData.current.feels_like - 273.15).toFixed(2)}°C</p>
                    </div>
                    <div className='grid grid-cols-6 w-full gap-2 h-full justify-center py-1 px-5 items-center bg-transparent '>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3 rounded shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-pressure.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.pressure).toFixed(2)} hPa</p>
                        </div>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3  rounded-[0.5rem]  shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-humidity.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.humidity).toFixed(2)} %</p>
                        </div>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3  rounded-[0.5rem]  shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-dew-point.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.dew_point - 273.15).toFixed(2)}°C</p>
                        </div>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3 rounded-[0.5rem]  shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-visibility.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.visibility).toFixed(2)} m</p>
                        </div>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3  rounded-[0.5rem]  shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-clouds.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.clouds).toFixed(2)} %</p>
                            </div>
                        <div className='flex flex-col w-full justify-center text-center items-center p-3   rounded-[0.5rem]  shadow-sm shadow-ControllerPrim hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                            <img src='../../controller/icons-wind.png' alt='' className=' w-10 h-10'/>
                            <p>{(weatherData.current.wind_speed).toFixed(2) } m/s</p>
                            {/* <p>Wind Deg {(weatherData.current.wind_deg- 273.15).toFixed(2) }deg</p> */}
                        </div>
                    </div>
                    <div className=" flex  w-full  flex-wrap items-center bottom-0 justify-center rounded-b-[1rem]  mt-5 py-2 z-10">
                      <input
                        type="text"
                        placeholder="Location"    
                        value={searchLocation}                  
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="p-2 bg-transparent w-28 h-6 md:w-40 md:h-8 border-[0.1rem] placeholder-gray-200 shadow-md text-white text-[0.8rem] border-transparent hover:border-white focus:bg-[#4d4c4c] focus:border-white rounded-[0.5rem] mr-2"
                      />
                      <button onClick={(e) => handleSearch(e)} className=" w-12 text-[0.7rem]  md:text-[1rem] shadow-md h-6 md:w-20 md:h-8 bg-ControllerSec hover:shadow-white focus:bg-[#4d4c4c] text-white rounded">
                        Search
                      </button>
                    </div>
                 
                </div>
              </div>          
            </div>
          )}
   
        {forecast && (
            
          <div className="grid grid-cols-7 my-5 pb-5 px-5 ">
            {forecast.slice(1 ,8).map((day, index) => (
              <div key={index} className=' pt-2 p-2 bg-transparent backdrop-blur-3xl rounded-[1rem] m-1'>
                <p className='md:text-[1rem] text-[0.6rem] p-1 text-white'>{new Date(day.dt * 1000).toDateString().substring(0,10)}</p>
                <div className='grid grid-cols-1 gap-1  w-full justify-center p-3 shadow-sm rounded-md bg-transparent items-center hover:bg-[#4d4c4c] transition duration-200 ease-linear hover:shadow-white'>
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt='' className=' rounded-[50%]  bg-ControllerSec w-25 h-25'/>
                    <p className='md:text-[0.8rem] text-[0.5rem] font-bold text-white'>{day.weather[0].description}</p>
                    <p className='md:text-[1.5rem] text-[0.8rem] text-wrap font-bold text-white'>{day.temp.day}°C</p>
                    <div className=' flex flex-row justify-center text-[0.5rem] md:text-[0.8rem] p-3 gap-2 items-center '>
                        <img src='../../controller/icons-rain.png' alt='' className=' w-10 h-10'/>
                        <p>{day.rain}mm</p>
                    </div>
                    <div className=' flex flex-row gap-2 justify-center text-[0.5rem] md:text-[0.8rem] content-center items-center'>
                        <img src='../../controller/icons-wind.png' alt='' className=' w-10 h-10'/>
                        <p>{(day.wind_speed).toFixed(2) } m/s</p>
                    </div>
                </div>                
              </div>
            ))}
           
          </div>
        )}
      </div>
    );
};
 export default Weather