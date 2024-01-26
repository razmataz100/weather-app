import './Forecast.css'

const Forecast = ({forecastData}) => {

    console.log(forecastData)

    return(
        <>
        <div className="forecast-container">
        {forecastData.map((day, index)=>(
            <div key={index} className='day-containers'>
                <p><strong>{day.Date}</strong></p>
                <p><img src={day.Icon} alt="Weather Icon"/></p>
                <p id='condition2-style'>{day.Condition}</p>
                <p id='max-style'>Max {day.MaxTemp} °C</p>
                <p id='min-style'>Min {day.MinTemp} °C</p>            
            </div>
        ))}
        </div>
        </>
    );
}
export default Forecast;

