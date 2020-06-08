var expect = require("chai").expect;
var main = require("../src/main");

describe("Roman numeral conversion", () => {
  it("returns 1 if I", () => {
    var res = main.arabicConvert("I");
    expect(res).to.equal(1);
  });

  it("returns 2 if II", () => {
    var res = main.arabicConvert("II");
    expect(res).to.equal(2);
  });

  it("returns 5 if V", () => {
    var res = main.arabicConvert("V");
    expect(res).to.equal(5);
  });

  it("returns 4 if IV", () => {
    var res = main.arabicConvert("IV");
    expect(res).to.equal(4);
  });

  it("returns 4 if IV", () => {
    var res = main.arabicConvert("IV");
    expect(res).to.equal(4);
  });

  it("returns 30 if XXX", () => {
    var res = main.arabicConvert("XXX");
    expect(res).to.equal(30);
  });
});
