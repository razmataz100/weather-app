import './CurrentCity.css'

const CurrentCity = ({weatherData}) => {


    return(
        <>
        <div className="current-city-container">
        <h2 id='city-style'>{weatherData.City}</h2>
        <p id='condition-style'>{weatherData.Condition}</p>
        <img src={weatherData.Icon} alt="Weather Icon" id='icon-style'/>
        <p id='temp-style'><strong>{weatherData.Temperature}°C</strong></p>
        <p id='feelslike-style'>Feels like: {weatherData.FeelsLike}°C</p>
        <p id='time-style'>{weatherData.LocalTime}</p>
        
        <div className='maxmintemp'>
        <p>Max: {weatherData.MaxTemp}°C</p>
        <p>Min: {weatherData.MinTemp}°C</p>
        </div>

        

        </div>    
        
        </>

    );

}
export default CurrentCity;