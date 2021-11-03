/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */

const converter = require("./converter");

const {
  getExchangeRateToUSD,
  convertEURToGBP,
  convertUSDToGBP,
  addEURAndGBPToCAD,
  toTwoDecimals,
} = converter;
const rates = require("../../data/currency-rates-from-dollars.json");

const { toGBP, toEUR } = rates;

describe("Currency conversion helper", () => {
  it("Should get exchange rate from given currency to USD", () => {
    const givenCurrency = "EUR";
    const exchangeRateToUsd = 1 / getExchangeRateToUSD(givenCurrency);
    const expectedRate = rates[`to${givenCurrency}`];
    expect(exchangeRateToUsd).toEqual(expectedRate);
  });

  it("Should convert USD to GBP", () => {
    const currencyRateGBP = rates["toGBP"];
    const valueToConvertUSD = 42;
    const expectedGBPValue = toTwoDecimals(valueToConvertUSD * currencyRateGBP);
    const calculatedGBPValue = convertUSDToGBP(valueToConvertUSD);

    expect(expectedGBPValue).toEqual(calculatedGBPValue);
  });

  it("Should convert EUR to GBP", () => {
    const givenEurValue = 42;
    const expectedGbpValue = toTwoDecimals((givenEurValue * toGBP) / toEUR);
    const calculatedGbpValue = convertEURToGBP(givenEurValue);

    expect(expectedGbpValue).toEqual(calculatedGbpValue);
  });

  it("Should add EUR and GBP and convert to CAD", () => {
    const calculatedSum = toTwoDecimals(
      addEURAndGBPToCAD({ valEUR: 13.12, valGBP: 99 })
    );
    const expectedResultInCad = 185.64;
    expect(calculatedSum).toEqual(expectedResultInCad);
  });

  it("Should round numbers to two decimals", () => {
    const numberToRound = 1.1111111111111;
    const roundedNumber = toTwoDecimals(numberToRound);

    expect(roundedNumber).toEqual(1.11);
  });
});
