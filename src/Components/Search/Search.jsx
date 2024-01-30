import { useEffect, useRef, useState} from "react";
import './Search.css'
import CurrentCity from "../CurrentCity/CurrentCity";
import Forecast from "../Forecast/Forecast";


const Search = () => {

    const [city, setCity] = useState("Stockholm")
    const [weatherData, setWeatherData] = useState("");
    const [forecastData, setForecastData] = useState([]);
    const apiKey = "856f176838c048c5824171034241701";
    const apiUrl = "http://api.weatherapi.com/v1/forecast.json"

    useEffect(() =>{
        getWeather();
    }, [])

    const getWeather = () => {
        
        const requestUrl = `${apiUrl}?key=${apiKey}&q=${city}&days=6`;

        fetch(requestUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data =>{

            const currentWeather = data.current;
            const forecastWeatherArray = data.forecast.forecastday;

            const item = {
                City: data.location.name,
                Icon: currentWeather.condition.icon,
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
                Condition: day.day.condition.text,
                Icon: day.day.condition.icon
            }));

            setWeatherData(item)
            setForecastData(forecastItems)
        })
        .catch (error => {
            alert(error.message);
    })
};

    const handleCityChange = event => {
        setCity(event.target.value);
    }

    return(
        <>
        <div className="search-bar">
            <input type="text" placeholder="City" value={city} onChange={handleCityChange}/>
            <button id="search-button" onClick={getWeather}>Search</button>
            <CurrentCity weatherData={weatherData}/>
            <Forecast forecastData={forecastData}/>
        </div>  
        </>
    );
}
export default Search;