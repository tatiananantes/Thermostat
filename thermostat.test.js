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

  it('sets max temp based on power saving being on', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe("25 (maximum reached)");
  });

  it('Can go above previous max temp with power saving off', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it('Can be reset to the default value', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('Gets the current energy usage', () => {
    expect(thermostat.getEnergyUsage()).toBe('medium-usage');
  });

  it('Gets the high energy usage', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getEnergyUsage()).toBe('high-usage');
  });

  it('Gets the current energy usage', () => {
    thermostat.reset();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toBe('low-usage');
  });

  it('Temp can not drop below 10', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe("10 (minimum reached)");
  })

});