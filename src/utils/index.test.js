import { rollDice } from "./index";

describe("utils", () => {
  it("rolls dice", () => {
    const result = rollDice();
    expect(typeof result).toEqual("number");
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });
});
