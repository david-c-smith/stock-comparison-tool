import {
  getAllTickerSymbols,
  getGlobalQuote,
  getOverview,
} from '../../client/services/service'
import axios from 'axios'

describe('Test service', () => {
  test('getAllTickerSymbols', async () => {
    const data = await getAllTickerSymbols()
    expect(data).toHaveLength(4936)
  })

  test('getGlobalQuote', async () => {
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
    await expect(getGlobalQuote('TSLA')).resolves.toEqual(stock)
  })

  test('getOverview', async () => {
    expect.assertions(1)
    const stock = {
      'Symbol': 'IBM',
      'AssetType': 'Common Stock',
      'Name': 'International Business Machines Corporation',
      'Description': 'International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.',
      'CIK': '51143',
      'Exchange': 'NYSE',
      'Currency': 'USD',
      'Country': 'USA',
      'Sector': 'TECHNOLOGY',
      'Industry': 'COMPUTER & OFFICE EQUIPMENT',
      'Address': '1 NEW ORCHARD ROAD, ARMONK, NY, US',
      'FiscalYearEnd': 'December',
      'LatestQuarter': '2021-12-31',
      'MarketCapitalization': '111107826000',
      'EBITDA': '12189000000',
      'PERatio': '19.52',
      'PEGRatio': '1.184',
      'BookValue': '21.05',
      'DividendPerShare': '6.56',
      'DividendYield': '0.0529',
      'EPS': '6.35',
      'RevenuePerShareTTM': '64.01',
      'ProfitMargin': '0.1',
      'OperatingMarginTTM': '0.101',
      'ReturnOnAssetsTTM': '0.0251',
      'ReturnOnEquityTTM': '0.237',
      'RevenueTTM': '57351000000',
      'GrossProfitTTM': '31486000000',
      'DilutedEPSTTM': '6.35',
      'QuarterlyEarningsGrowthYOY': '0.696',
      'QuarterlyRevenueGrowthYOY': '0.692',
      'AnalystTargetPrice': '143.47',
      'TrailingPE': '19.52',
      'ForwardPE': '12.17',
      'PriceToSalesRatioTTM': '1.937',
      'PriceToBookRatio': '5.91',
      'EVToRevenue': '2.782',
      'EVToEBITDA': '12.86',
      'Beta': '1.099',
      '52WeekHigh': '140.73',
      '52WeekLow': '113.2',
      '50DayMovingAverage': '130.96',
      '200DayMovingAverage': '131.16',
      'SharesOutstanding': '896320000',
      'DividendDate': '2022-03-10',
      'ExDividendDate': '2022-02-10'
    }
    const payload = { data: stock }
    axios.get = jest.fn().mockResolvedValue(payload)
    await expect(getOverview('IBM')).resolves.toEqual(stock)
  })
})