import { createProxyMiddleware } from 'http-proxy-middleware'
import cors from 'cors'

// Handles CORs errors when requesting data from Alpha Vantage
module.exports = (app) => {
  const corsOptions = {
    origin: 'https://stock-comparison-tool.herokuapp.com/',
    optionsSuccessStatus: 200,
  }
  app.use(cors(corsOptions))
  app.options('*', cors())
  app.use('/')
}
