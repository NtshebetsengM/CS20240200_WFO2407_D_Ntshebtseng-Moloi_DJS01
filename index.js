/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityinKmPerHour = 10000; // velocity (km/h)
const accelerationInMetersPerSecSquared = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKm = 0; // distance (km)
const remainaingfuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKgPerSec = 0.5; // fuel burn rate (kg/s)

//unit conversion
const velocityinMetersPerSec = velocityinKmPerHour / 3.6 //velocity (km/s)

const updatedDistance = distanceInKm + (velocityinKmPerHour * (timeInSeconds / 3600)) //calcultes new distance
const updatedRemainingFuel = remainaingfuelInKg - (fuelBurnRateInKgPerSec * timeInSeconds) //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const validateUnits = (velocity, acceleration, time)=>{
  if (typeof velocity !== 'number' || velocity < 0) {
    throw new Error('Invalid velocity: must be a positive number (in km/s)');
  }
  if (typeof acceleration !== 'number' || acceleration < 0) {
    throw new Error('Invalid acceleration: must be a positive number(in m/s²)');
  }
  if (typeof time !== 'number' || time < 0) {
    throw new Error('Invalid time: must be a positive number (in seconds)');
  }
}

const calcNewVelocity = (velocity, acceleration , time) => { 
 validateUnits(velocity, acceleration, time)
  return velocity + (acceleration * time)
}

try {
  const updatedVelocity = calcNewVelocity(velocityinMetersPerSec, accelerationInMetersPerSecSquared, timeInSeconds);
  const updatedVelocityInKmH = updatedVelocity * 3.6
  console.log(`Corrected New Velocity: ${updatedVelocityInKmH} km/h`);
} catch (error) {
  console.error(error.message);
}

console.log(`Corrected New Distance: ${updatedDistance} km`);
console.log(`Corrected Remaining Fuel: ${updatedRemainingFuel} kg`);






