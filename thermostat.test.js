const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();
  it('get temperature - should return 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('can have temperature increased', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it('can have temperature decreased', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('sets max temp based on powersaving', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

});