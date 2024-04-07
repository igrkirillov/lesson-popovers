import { determineCardType, validateByLuhnAlgorithm } from "../js/utils";
import { cardTypes } from "../js/cardTypes";

describe("checking validateByLuhnAlgorithm", () => {
  test.each([
    { numberStr: "4532286210295683", expected: true },
    { numberStr: "11", expected: false },
  ])("validateByLuhnAlgorithm($number)", ({ numberStr, expected }) => {
    expect(validateByLuhnAlgorithm(numberStr)).toBe(expected);
  });
});

describe("checking determining card type", () => {
  test.each([
    { numberStr: "4532286210295683", expected: cardTypes.visa },
    { numberStr: "5555555555555555", expected: cardTypes.mastercard },
    { numberStr: "2222222222222222", expected: cardTypes.mir },
    { numberStr: "111", expected: null },
  ])("determineCardType($numberStr)", ({ numberStr, expected }) => {
    expect(determineCardType(numberStr)).toBe(expected);
  });
});
