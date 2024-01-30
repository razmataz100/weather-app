import './CurrentCity.css'

const CurrentCity = ({weatherData}) => {


    return(
        <>
        <div className="current-city-container">
            <h2 id='city-style'>{weatherData.City}</h2>
            <div className='weather-info'>
                <p id='temp-style'><strong>{weatherData.Temperature} °C</strong></p>
                <img src={weatherData.Icon} alt="Weather Icon" id='icon1-style'/>
                <p id='condition1-style'>{weatherData.Condition}</p>
            </div>
            <p id='time-style'><strong>{weatherData.LocalTime}</strong></p>
            <div className='info1-style'>
                <p>Feels like {weatherData.FeelsLike} °C</p>
                <p>Max {weatherData.MaxTemp} °C</p>
                <p>Min {weatherData.MinTemp} °C</p>
            </div>
        </div>
        </>
    );
}
export default CurrentCity;