import React,{ useState,useEffect } from 'react'
import "../Weather/weather.css"

export const WeatherCard = ({ 
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
 }) => {
    const [weatherState, setWeatherState] = useState("")

    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case "Clouds": 
                    setWeatherState("wi-day-cloudy");    
                    break;
                case "Haze": 
                    setWeatherState("wi-fog");    
                    break;
                case "Clear": 
                    setWeatherState("wi-day-sunny");    
                    break;
                case "Mist": 
                    setWeatherState("wi-dust");    
                    break;

                default:
                    setWeatherState("wi-day-sunny");    
                    break;
            }
        }
    }, [weatherMood])

    //Converting seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className="weather-container">
                       <div className="weather-img">
                         <i className={`wi ${weatherState}`}></i>
                        </div> 

                        {/* weather information */}
                        <div className="weather-info-container-1">
                                <div className="weather-temp">
                                        <span>{temp}&deg;</span>
                                </div>

                                <div className="weather-Description">
                                    <div className="weather-condition">{weatherMood}</div>
                                    <div className="place" >{name}, {country}</div>
                                </div>      
                        </div>

                                {/*For date  */}
                                <div className="myDate"> {new Date().toLocaleString()}</div>

                            {/* Four column section  */}
                                <div className="weather-info-container-2">
                                 <div className="weather-temp-2">
                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-sunset"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           {time} <br />
                                         Sunset
                                        </p>
                                     </div>

                                     {/* Humiity */}
                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-humidity"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           {humidity} <br />
                                          Humidity
                                        </p>
                                     </div>     
                                </div>

                                {/* weather Extra infor 2 */}
                                <div className="weather-extra-info">
                                    <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-rain"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           {pressure} <br />
                                          Pressure
                                        </p>
                                     </div>  

                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-strong-wind"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           {speed} <br />
                                          Speed
                                        </p>
                                     </div>  
                                </div>

                        </div>
                </article>
        </>
    )
}
