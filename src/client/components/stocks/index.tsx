import React, { FC, Fragment } from 'react'
import { useAppSelector } from '../../../hooks'
import { removeStock } from '../../store/actions/stocks.actions'
import { Table, TableCell, TableRow, TableBody, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faX } from '@fortawesome/free-solid-svg-icons'
import './stocks.scss'
import { stock } from '../../../types'

// Renders a tabular representation of multiple stocks
const Stocks: FC = () => {
  const stockData = useAppSelector((state) => state.stocks)
  const dispatch = useDispatch()
  const headerValues = ['', 'Company', 'Symbol', 'Price', 'High', 'Low']

  // Handle stock deletion
  const onDelete = (symbol: string) => {
    dispatch(removeStock(symbol))
  }

  return (
    <Fragment>
      <Container>
        <Table>
          {headerValues.map(header =>
            <TableCell key={header}>{header}</TableCell>
          )}
          <TableBody>
            {stockData.map((stock: stock) => (
              <TableRow key={stock.name}>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faX}
                    color='red'
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDelete(stock.symbol)}
                  />
                </TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>{stock.symbol}</TableCell>
                <TableCell>
                  ${stock.price.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                  &nbsp;
                  <FontAwesomeIcon
                    icon={stock.changePercent > 0 ? faArrowUp : faArrowDown}
                    color={stock.changePercent > 0 ? 'green' : 'red'}
                  /></TableCell>
                <TableCell>${stock.high.toFixed(2)}</TableCell>
                <TableCell>${stock.low.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Fragment>)
}

export default Stocks