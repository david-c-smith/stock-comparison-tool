import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select-virtualized'
import { useAppSelector } from '../../../hooks'
import { getAllTickerSymbols } from '../../services/service'
import { getCompanyQuote } from '../../store/actions/stocks.actions'
import Alert from '@mui/material/Alert'
import './search.scss'

// Renders a search dropdown for finding stocks
const Search: FC = () => {
  const dispatch = useDispatch()
  const stocks = useAppSelector((state) => state.stocks)
  const [dropdownOptions, setDropdownOptions] = useState([])

  // User can only view 3 stocks at a time
  const reachedStockLimit = Object.keys(stocks).length >= 3

  useEffect(() => {
    const getDropdownOptions = async () => {
      const options = await getAllTickerSymbols()
      const formattedDropdownOptions = options.map(stock => ({
        value: stock.symbol,
        name: stock.name,
        label: `${stock.symbol} (${stock.name})`
      }))
      setDropdownOptions(formattedDropdownOptions)
    }

    getDropdownOptions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Captures search bar input
  const onSearchChange = async (data: any) => {
    dispatch(await getCompanyQuote(data.value, data.name))
  }

  return (
    <Fragment>
      {reachedStockLimit ?
        <Alert severity='warning'>
        If you need immediate help for a gambling problem, please call
        the state of Maryland Problem Gambling Helpline at 1-800-GAMBLER :)
        </Alert> : null }
      <Select
        className='basic-single'
        classNamePrefix='select'
        value=''
        isDisabled={reachedStockLimit}
        name='search'
        placeholder='Enter up to 3 stocks to compare the current stock prices'
        options={dropdownOptions}
        onChange={(e: any) => onSearchChange(e)}
      />
    </Fragment>
  )
}
export default Search