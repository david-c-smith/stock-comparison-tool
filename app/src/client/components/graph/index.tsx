import React, { FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from '@mui/material'
import { useAppSelector } from '../../../hooks'

const Graph: FC = () => {
  const stocks = useAppSelector((state) => state.stocks)
  const categories = Object.keys(stocks)
  const epsData = Object.values(stocks)

  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stock EPS Data'
    },
    xAxis: {
      categories: categories
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      reversed: true
    },
    series: epsData
  }

  return (
    <Container>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  )
}

export default Graph