import React, { FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Container } from '@mui/material'
import { useAppSelector } from '../../../hooks'
import './graph.scss'

// Renders a graphical representation of EPS data
const Graph: FC = () => {
  const stocks = useAppSelector((state) => state.stocks)
  const categories = Object.values(stocks).map((stock) => stock.symbol)
  const epsData = Object.values(stocks).map((stock) => stock.eps)

  const options = {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        pointWidth: 55
      }
    },
    title: {
      text: 'Stock EPS Data',
      style: {
        color: 'white',
      }
    },
    xAxis: {
      categories: categories,
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    yAxis: {
      min: 0,
      gridLineColor: 'transparent',
      title: {
        text: 'EPS (Earnings Per Share)',
        style: {
          color: 'white',
        }
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    series: [{ data: epsData, name: 'Current EPS' }]
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