import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
import Navbar from './Navbar'
import ModeContext from './ModeContext';
import DarkScreen from './DarkScreen';
import defaultbg from './Image/defaultBG.jpg';
import WeatherCard from './WeatherCard';

function App() {
  const [city, setCity] = useState('nagpur')
  const [weatherData,setWeatherData] = useState();
  const [isDarkMode, setIsDark] = useState(false);
  const [bgImage, setBbImage] = useState(defaultbg);

  function toggleMode() {
    setIsDark(prev => !prev);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  const unsplashClintId = 'YMgahDr-fMZnKTbNgje2RnWpKLINS0sY04aGeWPytVw';
  const apikey = "25458e7b298d32310bc31c7c1801c4e8";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const bgUrl = `https://api.unsplash.com/search/photos?client_id=${unsplashClintId}&query=${city}&orientation=landscape`;
  const weatherUrl = `${apiUrl}${city}&appid=${apikey}`;

  async function getallData(){
    const response = await Promise.all([fetch(weatherUrl),fetch(bgUrl)]);
    if(response.every(Res => Res.ok)){
      const data = await Promise.all(response.map(resp => resp.json()));
      console.log(data);
      setWeatherData(data[0]);
      setBbImage(data[1].results[getRandomNumber()].urls.regular);
    }
  }

  useEffect(() => {
    getallData();
  }, [city])

  const bgstyles = {
    width: '100%',
    height: '100vh', // Full viewport height
    backgroundSize: 'cover',
    color: 'black',
    backgroundPosition: 'center',
    backgroundImage: `url(${bgImage})`
  }

  return (
    <ModeContext.Provider value={{ mode: isDarkMode, toggleMode: toggleMode, city: city, setCity: setCity }}>
      <div className={styles.container} style={bgstyles}>
        {isDarkMode && <DarkScreen />}
        <Navbar />
        <div className={styles.cardContainer}>
          {weatherData && <WeatherCard info={weatherData}/>}
        </div>
      </div>
    </ModeContext.Provider>
  )
}

export default App
