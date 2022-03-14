import { stock } from '../../../types'
import { getGlobalQuote, getOverview } from '../../services/service'
import { GET_STOCK_DATA, REMOVE_STOCK } from '../reducers/stocks.reducer'

export type StockAction =
  | {
      type: 'GET_STOCK_DATA';
      payload: {
        stockData: stock;
      };
    }
  | {
      type: 'REMOVE_STOCK';
      payload: {
        symbol: string;
      };
    };

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
    //TODO Handle errors
    console.log(error)
  }
}

export const removeStock = (symbol: string) => {
  return {
    type: REMOVE_STOCK,
    payload: {
      symbol: symbol,
    },
  }
}
