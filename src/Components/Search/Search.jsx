import { useRef, useState} from "react";
import './Search.css'
import CurrentCity from "../CurrentCity/CurrentCity";
import Forecast from "../Forecast/Forecast";


const Search = () => {

    const cityVal = useRef();
    const [weatherData, setWeatherData] = useState("");
    const [forecastData, setForecastData] = useState([]);
    const apiKey = "856f176838c048c5824171034241701";
    const apiUrl = "http://api.weatherapi.com/v1/forecast.json"

    const getWeather = () => {
        
        const city = cityVal.current.value;
        const requestUrl = `${apiUrl}?key=${apiKey}&q=${city}&days=6`;


        fetch(requestUrl)
        .then(response => response.json())
        .then(data =>{

            const currentWeather = data.current;
            const forecastWeatherArray = data.forecast.forecastday;

            const item = {
                City: data.location.name,
                LocalTime: data.location.localtime,
                Temperature: currentWeather.temp_c,
                FeelsLike: currentWeather.feelslike_c,
                Condition: currentWeather.condition.text,
                MaxTemp: forecastWeatherArray[0].day.maxtemp_c,
                MinTemp: forecastWeatherArray[0].day.mintemp_c
            };


            const nextFiveDays = forecastWeatherArray.slice(1, 6);
            const forecastItems = nextFiveDays.map(day => ({
                Date: day.date,
                MaxTemp: day.day.maxtemp_c,
                MinTemp: day.day.mintemp_c,
                Condition: day.day.condition.text
            }));

            setWeatherData(item)
            setForecastData(forecastItems)
        })

    }

    return(
        <>
        <div className="search-bar">
        <input type="text" placeholder="City" ref={cityVal} />
        <button id="search-button" onClick={getWeather}>Search</button>
        <CurrentCity weatherData={weatherData}/>
        <Forecast forecastData={forecastData}/>
        
        </div>  
        </>

    );
}
export default Search;