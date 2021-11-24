class Thermostat {

  constructor() {
    this.temp = 20;
    this.maxTemp = 25;
    this.powerSaving = true;
  }  

  getTemperature() {
    return this.temp;
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

}

module.exports = Thermostat;