import React, { useState } from 'react';
// import axios from 'axios';
import clear from './assets/img/clear.png';
import clouds from './assets/img/clouds.png';
import drizzle from './assets/img/drizzle.png';
import mist from './assets/img/mist.png';
import rain from './assets/img/rain.png';
import snow from './assets/img/snow.png';
import { Link } from 'react-router-dom';
import "./styles/ApiWeather.css";


const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'd26bae0dcd229c209235c5fd25a2c017';
  /* eslint-disable-next-line no-unused-vars */
  let weatherIcon = '';


// const fetchWeather = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       setWeather(response.data);
//       setError(null);
//     } catch (error) {
//       if (error.response) {
//         // Error de respuesta del servidor
//         setError(error.response.data.message || 'Error fetching weather data');
//       } else if (error.request) {
//         // Error de solicitud sin respuesta
//         setError('No response received');
//       } else {
//         // Otros errores
//         setError('Error fetching weather data');
//       }
//       setWeather(null);
//     }
//   };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setWeather(null);
        setError(data.message || 'Error fetching weather data');
      }
    } catch (error) {
      setWeather(null);
      setError('Error fetching weather data');
    }
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return clear;
      case 'Clouds':
        return clouds;
      case 'Drizzle':
        return drizzle;
      case 'Mist':
        return mist;
      case 'Rain':
        return rain;
      case 'Snow':
        return snow;
      default:
        return clear; // Puedes cambiarlo a un ícono genérico o de error si lo prefieres
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
    //axiosWeather();
  };

  return (
    <div className='containerapi'>
        
        <div className='cardApi'>

       
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weather && weather.main && weather.weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <img 
            src={getWeatherIcon(weather.weather[0].main)} 
            alt={weather.weather[0].description} 
          />
        </div>
      )}

      <Link to="/chat"><button>Ir a chat</button></Link>
      <Link to="/post"> <button>Ir a JsonPlaceHolder</button></Link>
      </div>
    </div>
  );
};

export default Weather;
