# Currency converter

## Version Number : 5b8d0fd276b6d288905ed2f63a934e057e8feca2

## Description

This app is a currency converter API that has these functionalities :

- return the exchange rate from Euro to Dollars
- convert US dollars to British Pounds
- convert Euro to British Pounds
- add Euros to British Pounds and return CAD

Each functionality has its own endpoint
There is a postman collection available at the root of this folder in order to make the calls to each endpoint

This app is written for nodejs v14.18.0

## Installing and starting

The package manager used to create this app is npm, but you can also use yarn : `npm i` or `yarn`

Before starting the service, please check the default environment variables in the `.env.sample` file and rename it to `.env` so the dotenv library used in this app can pick the local variables :

- `APP_PORT` : Set it to the port you would like to use. Default is 3000
- `LOG_LEVEL` : default is debug. Adjust to the desired verbosity

To start the app, type `npm start` in the console. The base url is _http://localhost:3000_

Use the postman collection provided to explore the API and make the calls

## Testing and coverage

The functions used to make the conversions have tests that can be triggered : `npm run test`
The code can be formatted and linted using eslint and pretty : `npm run lint`, `npm run format`

## TODO

Many points have been voluntarily omitted for simplicity's sake :

- health check endpoint
- more error handling
- type validation of the values received
- IaC
