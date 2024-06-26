import React,{useEffect,useState} from 'react'

import axios from 'axios'


const API_endpoint= `https://api.openweathermap.org/data/2.5/weather?`
// const API_endpoint= `https://api.openweathermap.org/data/3.0/onecall?`
const API_KEY = process.env.API_KEY

const Weather = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [responseData, setResponseData] = useState({})
  const [icon, setIcon] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position=>{
      
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      
      
    })

    let final_API=`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    // let final_API=`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_KEY}`
    console.log(final_API)
    axios.get(final_API).then((response)=>{
      console.log(response.data)
      setResponseData(response.data)
      if(response.data.weather && response.data.weather.lenght>0){
        setIcon(response.data.weather[0].icon)
      }
    
    })

  }, [])

  return (
    <div>
        Weather page
        <h1>{latitude}</h1>

        <h1>{longitude}</h1>
        <h1>{responseData.name}</h1>
       {/*  */}
       {/* <h1>{responseData.weather[0].description}</h1> */}
       {icon && <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon" />}


        
        
      
    </div>
  )
}

export default Weather
