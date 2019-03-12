describe("numsToStrings", () => {
  it("should not return any strings with characters that are not numbers", () => {
    // const strings = ['123', '45', 'yu', '9'];
    const output = [123, 45, 9];

    const result = numToString("123", "45", "yu", "9");

    expect(result).toEqual(output);
  });
  it("should return an empty array if nothing is parseable", () => {
    // const strings = ['2l', 'ah', '9p', ' 9'];
    const output = [];

    const result = numToString("2l", "ah", "9p");

    expect(result).toEqual(output);
  });
  it("should return an empty array if given an empty string", () => {
    const output = [];

    const result = numToString('');

    expect(result).toEqual(output);
  });
});
