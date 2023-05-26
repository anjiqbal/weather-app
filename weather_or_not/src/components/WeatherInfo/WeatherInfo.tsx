import { WeatherData } from "../App/App"

function WeatherInfo({ weatherProps, cityName }: {weatherProps:WeatherData, cityName:string}) {
  // return <p>{JSON.stringify(weatherProps)}</p>
  return (
  <div className="weather-info">
  <h1>{cityName}</h1>
  
  <p>Temperature is {weatherProps.main.temp}</p>
  <p>Feels like Temp {weatherProps.main.feels_like}</p>
  <p>Min Temp {weatherProps.main.temp_min}</p>
  <p>Max Temp {weatherProps.main.temp_max}</p>
  <p>Pressure {weatherProps.main.pressure}</p>
  <p>Humidity {weatherProps.main.humidity}</p>
  <p>Sea Level{weatherProps.main.sea_level}</p>
  <p>Ground Level{weatherProps.main.grnd_level}</p>
  </div>
  )
}

export default WeatherInfo;


