class Thermostat {
  constructor() {
    this.currentTemperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.currentTemperature;
  }

  up() {
    if (this.currentTemperature >= 32 && this.powerSavingMode == false) {
      return;
    } else if (this.currentTemperature >= 25 && this.powerSavingMode == true) {
      return;
    }
    this.currentTemperature += 1;
  }

  down() {
    if (this.currentTemperature <= 10) {
      return;
    }
    this.currentTemperature -= 1;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      this.powerSavingMode = true;
      if (this.currentTemperature > 25) {
        this.currentTemperature = 25;
      }
      return "PSM is now on, max temperature is 25";
    } else if (boolean === false) {
      this.powerSavingMode = false;
      return "PSM is now off, max temperature is 32";
    } else return "Incorrect argument given, try again";
  }

  reset() {
    this.currentTemperature = 20;
    this.powerSavingMode = true;
  }

  currentEnergyUsage() {
    if (this.currentTemperature < 18) {
      return "low-usage";
    } else if (this.currentTemperature >= 18 && this.currentTemperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
