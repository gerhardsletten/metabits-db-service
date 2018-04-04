const jsonGraphQLServer = require('json-graphql-server')
const db = require('./data/db')
const express = require('express')
const compression = require('compression')

console.log(jsonGraphQLServer)

const port = parseInt(process.env.PORT, 10) || 3000

const server = express()
server.use(compression())
server.use('/', jsonGraphQLServer.jsonGraphqlExpress(db))
server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
