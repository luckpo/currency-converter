// TODO : avoid code duplication put the converters here
const rates = require("../../data/currency-rates-from-dollars.json");
const logger = require("../../lib/logger");

const { toGBP, toEUR, toCAD } = rates;

const toTwoDecimals = (number) => {
  return parseFloat((Math.round(number * 100) / 100).toFixed(2));
};

const getExchangeRateToUSD = (currency) => {
  try {
    const rate = parseFloat(rates[`to${currency.toUpperCase()}`]);
    return 1 / rate;
  } catch (e) {
    logger.error(`getExchangeRateToUsd : could not get exchange rate`);
    throw e;
  }
};

const convertUSDToGBP = (inputUSD) => {
  return toTwoDecimals(inputUSD * toGBP);
};

const convertEURToGBP = (inputEUR) => {
  return toTwoDecimals((inputEUR * toGBP) / toEUR);
};

const addEURAndGBPToCAD = (eurAndGbpToAdd) => {
  const { valEUR, valGBP } = eurAndGbpToAdd;

  return toTwoDecimals((valEUR * toCAD) / toEUR + (valGBP * toCAD) / toGBP);
};

module.exports = {
  getExchangeRateToUSD,
  convertEURToGBP,
  convertUSDToGBP,
  addEURAndGBPToCAD,
  toTwoDecimals,
};
