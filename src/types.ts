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