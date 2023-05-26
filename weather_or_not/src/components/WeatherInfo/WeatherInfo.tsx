import { WeatherData } from "../App/App"

function WeatherInfo({ weatherProps, cityName }: {weatherProps:WeatherData, cityName:string}) {
  // return <p>{JSON.stringify(weatherProps)}</p>
  let temp = Math.floor(weatherProps.main.temp - 273.15)


  if (weatherProps.main){
  return (
  
  <div className="weather-info">
  <h1>{cityName}</h1>
  
  <p>Temperature is {`${Math.floor(weatherProps.main.temp - 273.15)} is Degrees Celcius`}</p>
  <p>{`${temp >= 18 ? "Get your shorts on":"Might need a few layers lad"}`}</p>
  <p>Feels like Temp {`${Math.floor(weatherProps.main.feels_like - 273.15)} is Degrees Celcius`}</p>
  <p>Min Temp {`${Math.floor(weatherProps.main.temp_min - 273.15)} is Degrees Celcius`}</p>
  <p>Max Temp {`${Math.floor(weatherProps.main.temp_max - 273.15)} is Degrees Celcius`}</p>
  <p>Pressure {weatherProps.main.pressure}</p>
  <p>Humidity {weatherProps.main.humidity}</p>
  <p>Sea Level{weatherProps.main.sea_level}</p>
  <p>Ground Level{weatherProps.main.grnd_level}</p>
  
  </div>
  )
}else{ return <p>No city by that name in database!</p>

}
}
export default WeatherInfo;


