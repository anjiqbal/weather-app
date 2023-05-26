import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState({});

  //call Api by CityName
  useEffect(() => {
    async function fetchWeatherData() {
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21877be773e7e74ecb9c636562b1b492`);
      const data = await response.json();
      setWeatherData(data);
      
    }
    setCityName("London")
    fetchWeatherData();

  }, [cityName]);

// handleclick(){

//   setCityName("")
// }
  //console log the weatherData
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);


  return (
    <div className="App">
<h1>Weather Or Not...</h1>
    </div>
  );
}

export default App;
