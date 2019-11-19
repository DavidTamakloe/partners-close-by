const getDistanceFromLondon = require("./get-distance-from-london");

const getPartnersCloseBy = partners => {
  const partnersCloseBy = partners.reduce((acc, partner) => {
    for (const office of partner.offices) {
      // If any of the partner's offices has a distanceFromLondon less or equal to 100km,
      // add an object with the organization name and office address
      const [officeLat, officeLong] = office.coordinates.split(",");
      const distanceFromLondon = getDistanceFromLondon({
        latitude: officeLat,
        longitude: officeLong
      });
      if (distanceFromLondon <= 100) {
        acc.push({
          organization: partner.organization,
          address: office.address
        });
      }
    }
    return acc;
  }, []);

  //Sort the results according to organization name
  partnersCloseBy.sort((a, b) => {
    if (a.organization < b.organization) {
      return -1;
    }
    if (a.organization > b.organization) {
      return 1;
    }
    return 0;
  });

  return partnersCloseBy;
};

module.exports = getPartnersCloseBy;
