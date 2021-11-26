const Weather = require('./openweather');
const got = require('got');

class Thermostat {

  constructor(weather) {
    this.default = 20;
    this.temp = this.default;
    this.maxTemp = 25;
    this.powerSaving = true;
    this.weather = weather;
  }  

  setCity(city) {
    this.weather.fetchWeatherData(city, (weatherData) => {
      const weatherAPI = JSON.parse(weatherData);
      this.temperature = weatherAPI.main.temp;
    })
  }

  getTemperature() {
    if(this.temp === this.maxTemp) {
      return `${this.temp} (maximum reached)`;
    } else if(this.temp === 10) {
      return `${this.temp} (minimum reached)`;
    } 
    else {
      return this.temp;
    } 
  }

  up() {
    if(this.temp < this.maxTemp) {
      this.temp++;
    }
  }

  down() {
    if(this.temp > 10) {
      this.temp--;
    }
  }

  setPowerSavingMode(boolean) {
    this.powerSaving = boolean;
    this.setMaxTemp();
  }

  setMaxTemp() {
    if(this.powerSaving) {
      this.maxTemp = 25;
    } else {
      this.maxTemp = 32;
    }
  }

  reset() {
    this.temp = this.default;
  }

  getEnergyUsage() {
    if (this.temp < 18) {
      return 'low-usage';
    }
    else if (this.temp <= 25) {
      return 'medium-usage';
    }
    else {
      return 'high-usage';
    }
  }
}

const weather = new Weather();
thermostat = new Thermostat(weather);
thermostat.setCity('Lisbon');
setTimeout(() => {
  console.log(thermostat.getTemperature())
}, 2000);


module.exports = Thermostat;
