/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const parameters = {
  velocityInKmH : 10000, // velocity (km/h)
  accelerationMSS : 3, // acceleration (m/s^2)
  timeInSeconds : 3600, // seconds (1 hour)
  initialDistanceKm : 0, // distance (km)
  initialFuelKg : 5000, // remaining fuel (kg)
  fuelBurnRateInKgS : 0.5 // fuel burn rate (kg/s)
}
//unit conversion
const toMetersPerSecond = (kmh) => kmh / 3.6 // Convert velocity from km/h to m/s
const toKilometers = (meters) => meters / 1000; // Convert meters to kilometers


// Pick up an error with how the function below is called and make it robust to such errors
const validateUnits = ({velocity, acceleration, time})=>{
  if (typeof velocity !== 'number' || velocity < 0) {
    throw new Error('Invalid velocity: must be a positive number (in km/h befor conversion)');
  }
  if (typeof acceleration !== 'number' || acceleration < 0) {
    throw new Error('Invalid acceleration: must be a positive number(in m/s²)');
  }
  if (typeof time !== 'number' || time < 0) {
    throw new Error('Invalid time: must be a positive number (in seconds)');
  }
}

// Function to calculate new velocity
const calcNewVelocity = ({velocity, acceleration , time}) => { 
 validateUnits({velocity, acceleration, time})
  return velocity + (acceleration * time) // Velocity in m/s
}

const calcUpdatedValues = (params) => {
  // Convert initial velocity from km/h to m/s
  const velocityInMPS = toMetersPerSecond(params.velocityInKmH)
  
  // Calculate updated velocity
  const updatedVelocityMPS = calcNewVelocity({
    velocity: velocityInMPS,
    acceleration: params.accelerationMSS,
    time: params.timeInSeconds,
  })

   // Calculate updated distance (initial distance + velocity*time)
  const updatedDistanceMeters = params.initialDistanceKm * 1000  + (velocityInMPS * params.timeInSeconds) // Distance in meters converted to km

// Calculate updated remaining fuel
  const updatedRemainingFuel = params.initialFuelKg - (params.fuelBurnRateInKgS * params.timeInSeconds); // Remaining fuel in kg

  return {
  updatedVelocityInKmH: updatedVelocityMPS * 3.6, // Convert back to km/h
  updatedDistanceKm:toKilometers(updatedDistanceMeters), // Convert distance back to km
  updatedRemainingFuel,
}
}


try {
  const { updatedVelocityInKmH, updatedDistanceKm, updatedRemainingFuel } = calcUpdatedValues(parameters);
  console.log(`Corrected New Velocity: ${updatedVelocityInKmH.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${updatedDistanceKm.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${updatedRemainingFuel.toFixed(2)} kg`);
} catch (error) {
  console.error(error.message);
}





