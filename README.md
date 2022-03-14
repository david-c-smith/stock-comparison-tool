# stock-comparison-tool
Why use such well established stock analysis tools such as TD Ameritrade, Robinhood, or Morningstar when you could use a _sleek, minimalistic_ stock tool like **stock-comparison-tool**? Stock-comparison-tool is a React application, which leverages the [AlphaVantage](https://alphavantage.co/) API in order to visualize and compare stock data.

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/17208971/158216926-6137c201-ecb9-419f-af95-bcaa521fbf35.png">

A deployed version of the application can be found [here](https://stock-comparison-tool.herokuapp.com/)

Some notable technologies used in this project are:

- React
- Typescript
- MUI
- Highcharts
- Jest
- Redux
- Redux-thunk
- React Select Virtualized
- http-proxy-middleware
- Axios 
- Github Actions + Heroku 

### Table of Contents
**[Getting Started](#getting-started)**<br>
**[Development](#development)**<br>
**[Testing](#testing)**<br>
**[Deployment](#deployment)**<br>

## Getting Started

Follow the steps below to get the app running on your local machine:

In the project root directory:

1. Run `npm install`.
2. Run `npm start`.
3. Open your browser to `http://localhost:3000`.

### Prerequisites

#### For development:

* Node/npm

#### For deployment:

CI/CD steps can be found in the Github Actions workflow located at `/.github/workflows/test.yml`.

## Development

Browse to `http://localhost:3000` to view the application.

## Testing

#### To run tests locally:
```
npm test
```

Note: Whenever new code is pushed to `main`, tests will automatically run in the Github Actions workflow.


## Deployment

Everytime you push to `main`, the `test.yml` Github Actions script will trigger, building the application and running tests. Upon successful completion, a deployment will trigger in Heroku. Hosted [here](https://stock-comparison-tool.herokuapp.com/)

