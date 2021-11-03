const logger = require("./lib/logger");

const express = require("express"); //eslint-disable-line no-unused-vars
const app = express();

const port = process.env.APP_PORT || 3000; //eslint-disable-line no-undef
const bodyParser = require("body-parser");

const {
  exchangeRateFromEURToUSD,
  conversionUSDToGBP,
  conversionEURToGBP,
  conversionSumEURandGBPToCAD,
} = require("./controllers/currency-conversion");

app.use(bodyParser.json());
app.get("/exchange-rate-eur-usd", exchangeRateFromEURToUSD);
app.post("/conversion-usd-gbp", conversionUSDToGBP);
app.post("/conversion-eur-gbp", conversionEURToGBP);
app.post("/conversion-sum-eur-gbp-to-cad", conversionSumEURandGBPToCAD);

app.listen(port, () => {
  logger.debug(`app started on port ${port}`);
});
