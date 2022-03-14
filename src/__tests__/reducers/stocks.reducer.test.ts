import stocksReducer, {
  GET_ERROR,
  GET_STOCK_DATA,
  REMOVE_STOCK,
} from '../../client/store/reducers/stocks.reducer'

describe('Test stock reducer', () => {
  test('Add a new stock', () => {
    const state = {
      stocks: [],
      error: '',
    }

    const newState = stocksReducer(state, {
      type: GET_STOCK_DATA,
      payload: {
        stockData: {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      },
    })

    expect(newState).toEqual({
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: '',
    })
  })

  test('Error adding stock', () => {
    const state = {
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: '',
    }

    const newState = stocksReducer(state, {
      type: GET_ERROR,
      payload: {
        error: 'Failed to retrieve stock information',
      },
    })

    expect(newState).toEqual({
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: 'Failed to retrieve stock information',
    })
  })

  test('Stock already exists in watchlist', () => {
    const state = {
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: '',
    }

    const newState = stocksReducer(state, {
      type: GET_STOCK_DATA,
      payload: {
        stockData: {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      },
    })

    expect(newState).toEqual({
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: 'GOOG has already been added to your watchlist',
    })
  })

  test('Remove a stock', () => {
    const state = {
      stocks: [
        {
          name: 'Alphabet Inc',
          symbol: 'GOOG',
          eps: 1,
          price: 1.5,
          changePercent: 1.46,
          high: 1.35,
          low: 0.53,
        },
      ],
      error: '',
    }

    const newState = stocksReducer(state, {
      type: REMOVE_STOCK,
      payload: {
        symbol: 'GOOG',
      },
    })

    expect(newState).toEqual({
      stocks: [],
      error: '',
    })
  })
})
