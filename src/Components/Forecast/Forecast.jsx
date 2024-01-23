import './Forecast.css'

const Forecast = ({forecastData}) => {

    console.log(forecastData)

    return(
        <>
        <div className="forecast-container">
        <h4>Forecast</h4>
        {forecastData.map((day, index)=>(
            <div key={index} className='day-containers'>
                <p>Date: {day.Date}</p>
                <p>Max Temp: {day.MaxTemp}</p>
                <p>Min Temp: {day.MinTemp}</p>
                <p>Condition: {day.Condition}</p>
            </div>
        ))}
        </div>     
        </>

    );

}
export default Forecast;