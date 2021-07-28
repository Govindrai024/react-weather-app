import "../Weather/weather.css"

import React from 'react'

export const WeatherCard = () => {
    return (
        <>
            <article className="weather-container">
                       <div className="weather-img">
                         <i className="wi wi-day-sunny"></i>
                        </div> 

                        {/* weather information */}
                        <div className="weather-info-container-1">
                                <div className="weather-temp">
                                        <span>20.5 </span>
                                </div>
                                <div className="weather-Description">
                                    <div className="weather-condition">Sunny</div>
                                    <div className="place" >Dehli, IND</div>
                                </div>      
                        </div>

                                {/*For date  */}
                                <div className="myDate"> {new Date().toLocaleString()}</div>

                   
                                <div className="weather-info-container-2">
                                 <div className="weather-temp-2">
                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-day-sunny"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           10:11 PM <br />
                                          Humidity
                                        </p>
                                     </div>

                                     {/* Humiity */}
                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-day-sunny"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           10:11 PM <br />
                                          Humidity
                                        </p>
                                     </div>     
                                </div>

                                {/* weather Extra infor 2 */}
                                <div className="weather-extra-info">
                                    <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-day-sunny"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           10:11 PM <br />
                                          Humidity
                                        </p>
                                     </div>  

                                     <div className="two-sided-section"> 
                                        <p>
                                            <i className={"wi wi-day-sunny"}></i>
                                        </p>
                                        <p className="extra-info-leftSide">
                                           10:11 PM <br />
                                          Humidity
                                        </p>
                                     </div>  
                                </div>

                        </div>
                </article>
        </>
    )
}
