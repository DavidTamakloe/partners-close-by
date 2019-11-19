const degreesToRadians = require("./degrees-to-radians");

const getDistanceFromLondon = ({ latitude, longitude }) => {
  const LONDON_LATITUDE = 51.515419;
  const LONDON_LONGITUDE = -0.141099;
  const EARTH_RADIUS_KM = 6371;

  const lat1 = degreesToRadians(LONDON_LATITUDE);
  const long1 = degreesToRadians(LONDON_LONGITUDE);
  const lat2 = degreesToRadians(latitude);
  const long2 = degreesToRadians(longitude);

  const absoluteLongDifference = Math.abs(long1 - long2);

  const absoluteLatDifference = Math.acos(
    Math.sin(lat1) * Math.sin(lat2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(absoluteLongDifference)
  );

  const distanceInKm = EARTH_RADIUS_KM * absoluteLatDifference;

  return distanceInKm;
};

module.exports = getDistanceFromLondon;
