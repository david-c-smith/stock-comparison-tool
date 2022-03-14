import { createProxyMiddleware } from 'http-proxy-middleware'

// Handles CORs errors when requesting data from Alpha Vantage
module.exports = app => {
  app.use(
    createProxyMiddleware('/*',
      {
        target: 'https://alphavantage.co',
        changeOrigin: true
      })
  )
}