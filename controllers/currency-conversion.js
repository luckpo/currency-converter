const converter = require("./helpers/converter");

const exchangeRateFromEURToUSD = (req, res) => {
  res.end(`${converter.getExchangeRateToUSD("EUR")}`);
};

const conversionUSDToGBP = (req, res) => {
  res.end(`${converter.convertUSDToGBP(req.body.valueUSD)}`);
};

const conversionEURToGBP = (req, res) => {
  res.end(`${converter.convertEURToGBP(req.body.valueEUR)}`);
};

const conversionSumEURandGBPToCAD = (req, res) => {
  res.end(`${converter.addEURAndGBPToCAD(req.body.valuesToAdd)}`);
};

module.exports = {
  exchangeRateFromEURToUSD,
  conversionUSDToGBP,
  conversionEURToGBP,
  conversionSumEURandGBPToCAD,
};
