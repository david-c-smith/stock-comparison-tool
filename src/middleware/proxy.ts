import { createProxyMiddleware } from 'http-proxy-middleware'

// Handles CORs errors when requesting data from Alpha Vantage
module.exports = app => {
  app.use(
    createProxyMiddleware('/api',
      {
        target: 'https://stock-comparison-tool.herokuapp.com/',
        changeOrigin: true
      })
  )
}