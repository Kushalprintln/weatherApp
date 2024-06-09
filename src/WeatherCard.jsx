import React, { useState } from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = () => {
    const [city, setCity] = useState('Nagpur');
    const [temperature, setTemperature] = useState('22°C');
    const [humidity, setHumidity] = useState('50%');
    const [windSpeed, setWindSpeed] = useState('15 Km/h');
    const [weatherIcon, setWeatherIcon] = useState('weather images/snow.png');

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Search for:', city);
    };

    return (
        <div className={styles.card}>
            <div className={styles.weather}>
                <img src={weatherIcon} alt="weather icon" className={styles.weatherIcon} />
                <h1 className={styles.temp}>{temperature}</h1>
                <h2 className={styles.city}>{city}</h2>
                <div className={styles.details}>
                    <div className={styles.col}>
                        <img src="./weather images/humidity.png" alt="humidity" />
                        <div>
                            <p className={styles.humidity}>{humidity}</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <img src="./weather images/wind.png" alt="wind" />
                        <div>
                            <p className={styles.wind}>{windSpeed}</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;