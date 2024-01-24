import './Forecast.css'

const Forecast = ({forecastData}) => {

    console.log(forecastData)

    return(
        <>
        <div className="forecast-container">
        {forecastData.map((day, index)=>(
            <div key={index} className='day-containers'>
                <p>{day.Date}</p>
                <p><img src={day.Icon} alt="Weather Icon" id='icon2-style'/></p>
                
                <div className='info2-style'>
                <p>{day.Condition}</p>
                <p>Max {day.MaxTemp}</p>
                <p>Min {day.MinTemp}</p>
                </div>

                    
            </div>
        ))}
        </div>     
        </>

    );

}
export default Forecast;