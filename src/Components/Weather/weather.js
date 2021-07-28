import react, {useState} from 'react'
import { WeatherCard } from '../weatherCard/weatherCard'
import './weather.css'

// http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1a1fec772803dc898689d6887291bb54


const Weather = () => {
    const [myInput, setMyInput] = useState("")
    {console.log(myInput)}
    return (
        <>
        <div className="main-container">
            <div className="child-container">
                    <input
                    type="search"
                    placeholder="Type here ...."
                    autoFocus
                    className="searchBar"
                    value={myInput}
                    // onChange={}
                
                    />
                    <button 
                    className="btnForSearch"
                    type="button" 
                    >Search</button>
              
              </div>
        </div>
        {/* Weather Cards  */}
        <WeatherCard />
                
                
        
        </>
    )
}
export default Weather