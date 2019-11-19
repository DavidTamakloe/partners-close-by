const { degreesToRadians } = require("../utilities");

test("Converts 1deg to 0.017453292519943295rad", () => {
  expect(degreesToRadians(1)).toBe(0.017453292519943295);
});
