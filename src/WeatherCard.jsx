import React, { useEffect, useState } from 'react';
import styles from './WeatherCard.module.css';
import humidityimg from './Image/humidity.png';
import wind from './Image/wind.png';
//   WEATHER IMAGES
import cloud from './Image/clouds.png'
import rain from './Image/rain.png';
import clear from './Image/clear.png'
import drizzle from './Image/drizzle.png'
import mist from './Image/mist.png';
import haze from './Image/haze.png';
import fog from './Image/fog.png';
import snow from './Image/snow.png'

const WeatherCard = ({info}) => {
    console.log(info);
    const [weatherIcon, setWeatherIcon] = useState('weather images/snow.png');

    useEffect(()=>{
        if(info.weather[0].main == "Clouds"){
            setWeatherIcon(cloud);
        }
        else if(info.weather[0].main == "Rain"){
            setWeatherIcon(rain);
        }
        else if(info.weather[0].main == "Clear"){
            setWeatherIcon(clear);
        }
        else if(info.weather[0].main == "Drizzle"){
            setWeatherIcon(drizzle);
        }
        else if(info.weather[0].main == "Mist"){
            setWeatherIcon(mist);
        }
        else if(info.weather[0].main == "Haze"){
            setWeatherIcon(haze);
        }
        else if(info.weather[0].main == "Fog"){
            setWeatherIcon(fog);
        }
        else if(info.weather[0].main == "Snow"){
            setWeatherIcon(snow);
        }
    },[info])


    return (
        <div className={styles.card}>
            <div className={styles.weather}>
                <img src={weatherIcon} alt="weather icon" className={styles.weatherIcon} />
                <h3>{info.weather[0].description}</h3>
                <h1 className={styles.temp}>{Math.round(info.main.temp)} °C</h1>
                <h2 className={styles.city}>{info.name}</h2>
                <div className={styles.details}>
                    <div className={styles.col}>
                        <img src={humidityimg} alt="humidity" />
                        <div>
                            <p className={styles.humidity}>{info.main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <img src={wind} alt="wind" />
                        <div>
                            <p className={styles.wind}>{info.wind.speed} KM/hr</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;