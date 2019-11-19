const { getDistanceFromLondon } = require("../utilities");

test("Gets distance in km from central london", () => {
  /*
   * Verify that No1 Royal Exchange, London, EC3V 3DG,
   * longitude: -0.08757919999993646, latitude: 51.5136102,
   * is 3.7089430843716684 Km from central London
   */

  expect(
    getDistanceFromLondon({
      latitude: 51.5136102,
      longitude: -0.08757919999993646
    })
  ).toBe(3.7089430843716684);
});
