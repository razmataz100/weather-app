import './CurrentCity.css'

const CurrentCity = ({weatherData}) => {
    return(
        <>
        <div className="current-city-container">
        
        <p>Current city: {weatherData.City}</p>
        <p>Local Time: {weatherData.LocalTime}</p>
        <p>Temperature: {weatherData.Temperature}°C</p>
        <p>Feels like: {weatherData.FeelsLike}°C</p>
        <p>Condition: {weatherData.Condition}</p>
        <p>Max: {weatherData.MaxTemp}°C</p>
        <p>Min: {weatherData.MinTemp}°C</p>
        

        </div>    
        
        </>

    );

}
export default CurrentCity;