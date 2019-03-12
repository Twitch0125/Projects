const getProperties = require("./util");
describe("getProperties", () => {
  it("should return the array correctly given an object with 3 properties", () => {
    const object = { z: "test", a: "testy", n: "testu" };
    const array = ["a", "n", "z"];

    const result = getProperties(object);

    expect(result).toEqual(array);
  });
  it("should return an empty array if the object does not have any properties", () => {
    const object = {};
    const array = [];

    const result = getProperties(object);

    expect(result).toEqual(array);
  });
  it("should return the array correctly given an object with 3 properties", () => {
    const object = { 7: "test", 9: "testy", 1: "testu" };
    const array = ["1", "7", "9"];

    const result = getProperties(object);

    expect(result).toEqual(array);
  });
});
