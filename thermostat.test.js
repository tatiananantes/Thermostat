const Thermostat = require('./thermostat');

describe('get Temperature', () => {
  const thermostat = new Thermostat();
  it('should return 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

});