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
const remaineingfuelInKg = 5000; // remaining fuel (kg)
const fuelBurnRateInKgPerSecond = 0.5; // fuel burn rate (kg/s)


const updatedDistance = distanceInKm + (velocityinKmPerHour * timeInSeconds ) //calcultes new distance
const updatedRemainingFuel = fuelBurnRateInKgPerSecond * timeInSeconds  //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (velocity, acceleration , time) => { 
  return velocity + (acceleration * time)
}
const updatedVelocity = calcNewVelocity( velocityinKmPerHour, accelerationInMetersPerSecSquared, timeInSeconds ) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${updatedVelocity} km/h`);
console.log(`Corrected New Distance: ${updatedDistance} km`);
console.log(`Corrected Remaining Fuel: ${updatedRemainingFuel} kg`);






