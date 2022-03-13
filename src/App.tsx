import React, { FC } from 'react'
import { Container } from '@mui/material'
import Stocks from './client/components/stocks'
import Graph from './client/components/graph'
import Search from './client/components/search'
import './app.scss'

const App: FC = () => {
  return (
    <Container>
      <Search />
      <Stocks />
      <Graph />
    </Container>
  )
}

export default App
