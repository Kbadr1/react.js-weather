import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import background from "./images/pexels-photo-66997.jpeg"

function App() {
    const [cityName, setCityName] = useState('');
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({
        clouds: undefined,
        humidity: undefined,
        temp: undefined,
        name: undefined,
        weatherDescription: undefined,
        windSpeed: undefined,
        windDegree: undefined
        
    });

    useEffect(() => {
        if (cityName === '') return;
        getWeather();
    }, [cityName]);

    const getWeather = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a4bdb3ec229b192eb202362ff94e6dce&units=metric`)
            .then(res => {
                console.log(res.data);
                setWeather({
                    clouds: res.data.clouds.all,
                    humidity: res.data.main.humidity,
                    windSpeed: res.data.wind.speed,
                    windDegree: res.data.wind.deg,
                    temp: res.data.main.temp,
                    name: res.data.name,
                    weatherDescription: res.data.weather[0].description
                });
            });
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearchResult = e => {
        e.preventDefault();
        setCityName(search);
        setSearch('');
    }


    return (
        <div className="App container">
            <div className="row">
                <div className="left p-0 col-lg-8">
                    <img src={background} alt=""/>
                    <h2>{new Date().toDateString()}</h2>
                </div>
                <div className="right col-lg-4">
                    <SearchForm search={search} updateSearch={updateSearch} getSearchResult={getSearchResult}/>
                    <Weather weather={weather}/>
                </div>
            </div>
            
        </div>
    );
}

export default App;
