import React, { FC, Fragment, useEffect } from 'react'
import { useAppSelector } from '../../../hooks'
import { removeStock } from '../../store/actions/stocks.actions'
import { Table, TableCell, TableRow, TableHead, TableBody, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Renders a tabular representation of multiple stocks
const Stocks: FC = () => {
  const stocks = useAppSelector((state) => state.stocks)
  console.log(stocks)
  const dispatch = useDispatch()
  const headerValues = ['', 'Company', 'Symbol', 'Price', 'High', 'Low']

  /** When user deletes the company */
  const onDelete = (e) => {
    dispatch(removeStock(e))
  }

  useEffect(() => {
    console.log(stocks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocks])

  return (
    <Fragment>
      <Container>
        <Table>
          {headerValues.map(header =>
            <TableHead key={header}>{header}</TableHead>
          )}
          <TableBody>
            {Object.keys(stocks).map((stock) => (
              <TableRow key={stock.name} >
                <FontAwesomeIcon
                  icon={stock.changePercent > 0 ? faArrowUp : faArrowDown}
                  color={stock.changePercent > 0 ? 'green' : 'red'}
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => onDelete(e)}
                />
                <TableCell>{stock.name} </TableCell>
                <TableCell>{stock.symbol}</TableCell>
                <TableCell>$ {stock.price.toFixed(2)}</TableCell>
                <TableCell>{stock.changePercent.toFixed(2)}%
                </TableCell>
                <TableCell>
                  {/* <Icon name='cancel' color='red' onClick={() => onDelete()} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Fragment>)
}

export default Stocks