import React from 'react';

const Weather = ({ weather }) => {    
    return (
        <div>
            <div className="weather">
                {weather.temp &&
                    <div className="weather-details">
                        <p>City <span>{weather.name}</span></p>
                        <p>Temprature <span>{weather.temp}&deg;C</span></p>
                        <p>Clouds <span>{weather.clouds}%</span></p>
                        <p>Condition <span>{weather.weatherDescription}</span></p>
                        <p>Humidity <span>{weather.humidity}%</span></p>
                        <p>Wind Speed <span>{weather.windSpeed}km/h</span></p>
                        <p>Wind Direction <span>{weather.windDegree}&deg;</span></p>
                    </div>}
            </div>
        </div>
        
    );
}
 
export default Weather;

