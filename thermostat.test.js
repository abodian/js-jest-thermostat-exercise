const Thermostat = require("./Thermostat");

describe("Thermostat class", () => {
  let thermostat = new Thermostat();

  it("returns the current thermostat temperature", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("increases the thermo temp by 1 celcius", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("increases the thermo temp by 2 celcius", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("sets power saving mode as off", () => {
    expect(thermostat.setPowerSavingMode(false)).toBe(
      "PSM is now off, max temperature is 32"
    );
  });

  it("increases temperature to 32 celcius max as PSM is off", () => {
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it("sets power saving mode as on", () => {
    expect(thermostat.setPowerSavingMode(true)).toBe(
      "PSM is now on, max temperature is 25"
    );
  });

  it("increases temperature to 25 celcius max as PSM is on", () => {
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("increases temperature to 26 celcius with PSM off", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it("resets temperature to 20", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("reduces temperature by 1 celsius", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("reduces temperature but stops at minimum temp of 10", () => {
    for (let i = 0; i < 20; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("returns current energy usage as low-usage", () => {
    thermostat.reset();
    for (let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(17);
    expect(thermostat.currentEnergyUsage()).toBe("low-usage");
  });

  it("returns current energy usage as medium-usage", () => {
    thermostat.reset();
    for (let i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.currentEnergyUsage()).toBe("medium-usage");
  });

  it("returns current energy usage as high-usage", () => {
    thermostat.reset();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(26);
    expect(thermostat.currentEnergyUsage()).toBe("high-usage");
  });
});
