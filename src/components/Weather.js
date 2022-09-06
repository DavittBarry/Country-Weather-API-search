import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const Weather = ({ city }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        .then((response) => {
            setWeather(response.data);
        });
    }, []);

    return (
        <div>
            <br/>
            {weather.main ? (
                <div className="container bg-secondary flex text-center flex-column table border text-light">
                    <br/>
                    <h2>Current weather in {city}:</h2>
                    <div>Temperature is about {weather.main.temp} &#8451;</div>
                    <img
                        alt="weather icon"
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    />
                    <div>Wind speed {weather.wind.speed} m/s</div>
                </div>
            ) : null}
        </div>
    );
};

export default Weather;