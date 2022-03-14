import { stock } from '../../../types'
import { getGlobalQuote, getOverview } from '../../services/service'
import {
  GET_ERROR,
  GET_STOCK_DATA,
  REMOVE_STOCK,
} from '../reducers/stocks.reducer'

export type StockAction =
  | {
      type: 'GET_STOCK_DATA';
      payload: {
        stockData: stock;
      };
    }
  | {
      type: 'GET_ERROR';
      payload: {
        error: string;
      };
    }
  | {
      type: 'REMOVE_STOCK';
      payload: {
        symbol: string;
      };
    };

/**
 * @function getCompanyQuote
 * @description Retrieves global quote and eps data for a specified stock
 * @param {string} symbol
 * @param {string} name
 *
 */
export const getCompanyQuote = async (symbol: string, name: string) => {
  try {
    const stockQuote = await getGlobalQuote(symbol)
    const epsData = await getOverview(symbol)

    const stockData = {
      symbol: stockQuote['Global Quote']['01. symbol'],
      price: parseFloat(stockQuote['Global Quote']['05. price']),
      changePercent: parseFloat(stockQuote['Global Quote']['10. change percent']),
      high: parseFloat(stockQuote['Global Quote']['03. high']),
      low: parseFloat(stockQuote['Global Quote']['04. low']),
      eps: parseFloat(epsData.EPS),
      name: name,
    }
    return {
      type: GET_STOCK_DATA,
      payload: {
        stockData: { ...stockData },
      },
    }
  } catch (error) {
    return {
      type: GET_ERROR,
      payload: {
        error: 'Failed to retrieve stock data.',
      },
    }
  }
}

/**
 * @function removeStock
 * @description Removes a pinned stock
 * @param {string} symbol
 *
 */
export const removeStock = (symbol: string) => {
  return {
    type: REMOVE_STOCK,
    payload: {
      symbol: symbol,
    },
  }
}