// src/api/index.spec.ts
import axios, { AxiosResponse } from 'axios'
import { getAllTickerSymbols } from '../../client/services/service'
//jest.mock(...) is used to automatically mock the axios module.jest.mock('axios');
// Create an object of type of mocked Axios.
const mockedAxios = axios
// At the same scope with `require`
jest.mock('axios')
describe('getAllTickerSymbols()', () => {
  test('should return ticker symbols', async () => {
    //Our desired output

    // eslint-disable-next-line @typescript-eslint/ban-types
    const tickers = [
      {
        country: 'China',
        industry: 'Service to the Health Industry',
        ipoyear: '',
        lastsale: '$1.18',
        marketCap: '37024766.00',
        name: 'ATA Creativity Global American Depositary Shares',
        netchange: '0.00',
        pctchange: '0.00%',
        sector: 'Miscellaneous',
        symbol: 'AACG',
        url: '/market-activity/stocks/aacg',
        volume: '23132',
      },
    ]

    //Prepare the response we want to get from axios
    const mockedResponse = {
      data: tickers,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    }
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse)
    expect(axios.get).not.toHaveBeenCalled()
    const data = await getAllTickerSymbols()
    expect(axios.get).toHaveBeenCalled()
    expect(data).toEqual(tickers)
  })
})
