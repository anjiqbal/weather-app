import { WeatherData } from "../App/App";
import "../App/App.css";

function WeatherInfo({
  weatherProps,
  cityName,
  tempUnits,
}: {
  weatherProps: WeatherData;
  cityName: string;
  tempUnits: string;
}) {


  let temp: number = 0;
  temp = Math.floor(weatherProps.main.temp - 273.15);
  
  if (weatherProps.main && weatherProps.weather) {
    return (
      <div className="weather-info">
        <h2>{cityName}</h2>
        <h3>{weatherProps.weather[0].description}</h3>
        <img
          id="wicon"
          src={`https://openweathermap.org/img/w/${weatherProps.weather[0].icon}.png`}
          alt="Weather icon"
        />
        <p>{`Temperature is ${temp} Degrees ${tempUnits}`}</p>
        <p className="message">
          `
          {(temp >= 18)
            ? "Get your shorts on"
            : "Might need a few layers chuck"}
          `
        </p>
      </div>
    );
  } else {
    return <p>No city by that name in database!</p>;
  }
}
export default WeatherInfo;
