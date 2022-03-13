import { StockAction } from '../actions/stocks.actions'

export const GET_STOCK_DATA = 'GET_STOCK_DATA'
export const REMOVE_STOCK = 'REMOVE_STOCK'

const initialState = {
  stocks: [],
}

const stocksReducer = (state = initialState, action: StockAction) => {
  switch (action.type) {
  case GET_STOCK_DATA:
    return {
      ...state,
      stockData: {
        ...state.stocks,
        [action.payload.stockData.symbol]: action.payload.stockData,
      },
    }
  case REMOVE_STOCK:
    // eslint-disable-next-line no-case-declarations
    const stateCopy = { ...state }
    delete stateCopy.stocks[action.payload.symbol]
    return { ...stateCopy }
  default:
    return { ...state }
  }
}

export default stocksReducer
