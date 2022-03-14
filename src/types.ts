import { StockAction } from './client/store/actions/stocks.actions'

export interface stock {
  symbol: string
  price: number
  eps: number
  high: number
  low: number
  changePercent: number
  name: string
}

export type stocks = {
  stocks?: stock[]
};

export type dispatchActions = StockAction
