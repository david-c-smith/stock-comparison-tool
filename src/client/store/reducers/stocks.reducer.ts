import { stock } from '../../../types'
import { StockAction } from '../actions/stocks.actions'

export const GET_STOCK_DATA = 'GET_STOCK_DATA'
export const GET_ERROR = 'GET_ERROR'
export const REMOVE_STOCK = 'REMOVE_STOCK'

const initialState = {
  stocks: [] as stock[],
  error: '',
}

const stocksReducer = (state = initialState, action: StockAction) => {
  switch (action.type) {
  case GET_STOCK_DATA:
    // User already added the stock to their watchlist
    if (
      state.stocks
        .map((stock) => stock.symbol)
        .includes(action.payload.stockData.symbol)
    ) {
      return {
        ...state,
        error: `${action.payload.stockData.symbol} has already been added to your watchlist.`,
      }
    }
    return {
      ...state,
      stocks: [...state.stocks, action.payload.stockData],
      error: '',
    }
  case GET_ERROR:
    // eslint-disable-next-line no-case-declarations
    const copy = { ...state }
    copy.error = action.payload.error
    return { ...copy }
  case REMOVE_STOCK:
    // eslint-disable-next-line no-case-declarations
    const stateCopy = { ...state }
    stateCopy.stocks = stateCopy.stocks.filter(
      (stock) => stock.symbol !== action.payload.symbol
    )
    return { ...stateCopy }
  default:
    return { ...state }
  }
}

export default stocksReducer
