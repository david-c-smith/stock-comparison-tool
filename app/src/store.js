import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import stocksReducer from './client/store/reducers/stocks.reducer'

const store = createStore(
  stocksReducer,
  applyMiddleware(thunk)
)

export default store