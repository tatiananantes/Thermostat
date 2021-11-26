const apiKey = require('./apikey');
const got = require('got');

class Weather {

  fetchWeatherData = (city) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    let weatherData = null;
    got(apiUrl).then((response) => {
    weatherData = JSON.parse(response.body);
    console.log(weatherData);
    });
  }
}
const weather = new Weather();
weather.fetchWeatherData('London');

module.exports = Weather;