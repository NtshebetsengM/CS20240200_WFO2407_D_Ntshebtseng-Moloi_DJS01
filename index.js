const parameters = {
  velocityInKmH: 10000, // velocity (km/h)
  accelerationMSS: 3, // acceleration (m/s²)
  timeInSeconds: 3600, // time (seconds)
  initialDistanceKm: 0, // initial distance (km)
  initialFuelKg: 5000, // remaining fuel (kg)
  fuelBurnRateInKgS: 0.5 // fuel burn rate (kg/s)
};

// Unit conversion functions
const toMetersPerSecond = (kmh) => kmh / 3.6; // Convert velocity from km/h to m/s
const toKilometers = (meters) => meters / 1000; // Convert meters to kilometers

// Unit validation function
const validateUnits = ({ velocityInKmH, accelerationMSS, timeInSeconds }) => {
  if (typeof velocityInKmH !== 'number' || velocityInKmH < 0) {
    throw new Error('Invalid velocity: must be a positive number in km/h');
  }
  if (typeof accelerationMSS !== 'number' || accelerationMSS < 0) {
    throw new Error('Invalid acceleration: must be a positive number in m/s²');
  }
  if (typeof timeInSeconds !== 'number' || timeInSeconds < 0) {
    throw new Error('Invalid time: must be a positive number in seconds');
  }
};

// Function to calculate new velocity in m/s
const calcNewVelocity = ({ velocityInMPS, accelerationMSS, timeInSeconds }) => {
  return velocityInMPS + (accelerationMSS * timeInSeconds); // Result in m/s
};

// Function to calculate updated values
const calcUpdatedValues = ({
  velocityInKmH,
  accelerationMSS,
  timeInSeconds,
  initialDistanceKm,
  initialFuelKg,
  fuelBurnRateInKgS
}) => {
  // Validate units before calculations
  validateUnits({ velocityInKmH, accelerationMSS, timeInSeconds });

  // Convert initial velocity from km/h to m/s
  const velocityInMPS = toMetersPerSecond(velocityInKmH);

  // Calculate updated velocity in m/s
  const updatedVelocityMPS = calcNewVelocity({
    velocityInMPS,
    accelerationMSS,
    timeInSeconds
  });

  // Calculate updated distance in meters
  const updatedDistanceMeters = initialDistanceKm * 1000 + (velocityInMPS * timeInSeconds);

  // Calculate updated remaining fuel
  const updatedRemainingFuel = initialFuelKg - (fuelBurnRateInKgS * timeInSeconds);

  return {
    updatedVelocityInKmH: updatedVelocityMPS * 3.6, // Convert back to km/h
    updatedDistanceKm: toKilometers(updatedDistanceMeters), // Convert distance back to km
    updatedRemainingFuel
  };
};

// Execution
try {
  const { updatedVelocityInKmH, updatedDistanceKm, updatedRemainingFuel } = calcUpdatedValues(parameters);
  console.log(`Corrected New Velocity: ${updatedVelocityInKmH.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${updatedDistanceKm.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${updatedRemainingFuel.toFixed(2)} kg`);
} catch (error) {
  console.error(error.message);
}
