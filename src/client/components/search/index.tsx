import React, { FC, Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select-virtualized'
import { getAllTickerSymbols } from '../../services/service'
import { getCompanyQuote } from '../../store/actions/stocks.actions'

// Renders a search dropdown for finding stocks
const Search: FC = () => {
  const dispatch = useDispatch()
  const [dropdownOptions, setDropdownOptions] = useState([])

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
      <Select
        className="basic-single"
        classNamePrefix="select"
        value=""
        name="search"
        placeholder="Enter up to 3 stocks to compare the current stock prices"
        options={dropdownOptions}
        onChange={(e: any) => onSearchChange(e)}
      />
    </Fragment>
  )
}
export default Search