import axios from 'axios'

// I would likely use AWS Secrets Manager, leaving it here for convenience
const apiKey = 'DBYEYWX6Y311OLJZ'

/**
 * @function getAllTickerSymbols
 * @description Retrieves a list of all NASDAQ ticker symbols to circumvent the
 * free tier rate limiting of the Alpha Vantage API. Primarily used to enable a cleaner
 * typeahead user experience when searching for stocks
 * @param {string} symbol
 *
*/
export const getAllTickerSymbols = async () => {
  const response = await axios.get('https://raw.githubusercontent.com/rreichel3/US-Stock-Symbols/main/nasdaq/nasdaq_full_tickers.json')
  return response.data
}

/**
 * @function getGlobalQuote
 * @description Retrieves general price and volume information for a specified stock
 * @param {string} symbol
 *
*/
export const getGlobalQuote = async (symbol:string) => {
  const response = await axios.get(`/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`)
  return response.data
}

/**
 * @function getOverview
 * @description Retrieves the stock's EPS data and other financial data
 * @param {string} symbol
 *
*/
export const getOverview = async (symbol:string) => {
  const response = await axios.get(`/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getGlobalQuote, getOverview, getAllTickerSymbols }