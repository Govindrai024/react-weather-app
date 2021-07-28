import React, {useState, useEffect} from 'react'
import { WeatherCard } from '../weatherCard/weatherCard'
import './weather.css'

// http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1a1fec772803dc898689d6887291bb54


const Weather = () => {
    const [searchValue, setSearchValue] = useState("Mumbai");
    const [infoTemp,setInfoTemp] = useState({});

   

    const getWeatherInfo = async () => {
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1a1fec772803dc898689d6887291bb54`

                const res = await fetch(url);
                const data = await res.json();

                const {temp, humidity, pressure} = data.main;
                const {main:weatherMood} = data.weather[0];
                const { name } = data;
                const { speed } = data.wind;
                const { country, sunset } = data.sys;

                const myWeatherTemp = {
                    temp,
                    humidity,
                    pressure,
                    weatherMood,
                    name,
                    speed,
                    country,
                    sunset
                };
                
                setInfoTemp(myWeatherTemp);

                
                // console.log(myWeatherTemp)
                // console.log(temp)
                // console.log(data)
            }catch(error){
                console.log(error)
            }
    };

    useEffect(() => {
        getWeatherInfo()
    }, [])

    return (
        <>
        <div className="main-container">
            <div className="child-container">
                    <input
                    type="search"
                    placeholder="Type here ...."
                    autoFocus
                    className="searchBar"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                
                    />
                    <button 
                    className="btnForSearch"
                    type="button" 
                    onClick={getWeatherInfo}
                    >Search</button>
              
              </div>
        </div>

        {/* Weather Cards  */}
        <WeatherCard  { ...infoTemp } />
        </>
    )
}
export default Weather