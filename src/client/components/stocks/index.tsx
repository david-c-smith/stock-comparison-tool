import React, { FC, Fragment } from 'react'
import { useAppSelector } from '../../../hooks'
import { removeStock } from '../../store/actions/stocks.actions'
import { Table, TableCell, TableRow, TableBody, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faX } from '@fortawesome/free-solid-svg-icons'
import './stocks.scss'

// Renders a tabular representation of multiple stocks
const Stocks: FC = () => {
  const stockData = useAppSelector((state) => state.stocks)
  const dispatch = useDispatch()
  const headerValues = ['', 'Company', 'Symbol', 'Price', 'High', 'Low']

  // Handle stock deletion
  const onDelete = (e) => {
    dispatch(removeStock(e))
  }

  return (
    <Fragment>
      <Container>
        <Table>
          {headerValues.map(header =>
            <TableCell key={header}>{header}</TableCell>
          )}
          <TableBody>
            {stockData.map((item) => (
              <TableRow key={item.name}>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faX}
                    color='red'
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => onDelete(e)}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>
                  ${item.price.toFixed(2)} ({item.changePercent.toFixed(2)}%)
                  &nbsp;
                  <FontAwesomeIcon
                    icon={item.changePercent > 0 ? faArrowUp : faArrowDown}
                    color={item.changePercent > 0 ? 'green' : 'red'}
                    onClick={(e) => onDelete(e)}
                  /></TableCell>
                <TableCell>${item.high.toFixed(2)}</TableCell>
                <TableCell>${item.low.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Fragment>)
}

export default Stocks