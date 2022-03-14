import {
  getCompanyQuote,
  removeStock,
} from '../../client/store/actions/stocks.actions'
import {
  GET_STOCK_DATA,
  REMOVE_STOCK,
} from '../../client/store/reducers/stocks.reducer'
import axios from 'axios'

describe('Test stock actions', () => {
  test('Add a new stock', async () => {
    expect.assertions(1)
    const stock = {
      'Global Quote': {
        '01. symbol': 'TSLA',
        '02. open': '840.1970',
        '03. high': '843.8020',
        '04. low': '793.7700',
        '05. price': '795.3500',
        '06. volume': '22345722',
        '07. latest trading day': '2022-03-11',
        '08. previous close': '838.3000',
        '09. change': '-42.9500',
        '10. change percent': '-5.1235%'
      }
    }
    const payload = { data: stock }
    axios.get = jest.fn().mockResolvedValue(payload)
    await expect(getCompanyQuote('TSLA', 'Tesla')).resolves.toEqual({
      type: GET_STOCK_DATA,
      payload: {
        stockData: {
          name: 'Tesla',
          eps: NaN,
          symbol: 'TSLA',
          price: 795.3500,
          changePercent: -5.1235,
          high: 843.8020,
          low: 793.7700,
        },
      },
    })

  })

  test('Remove a stock', () => {
    const data = removeStock('TSLA')

    expect(data).toEqual({
      type: REMOVE_STOCK,
      payload: {
        symbol: 'TSLA',
      },
    })
  })
})
