class Thermostat {

  constructor() {
    this.default = 20;
    this.temp = this.default;
    this.maxTemp = 25;
    this.powerSaving = true;
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

module.exports = Thermostat;