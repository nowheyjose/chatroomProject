import * as dotenv from 'dotenv'
dotenv.config()

import * as path from 'path'
import * as express from 'express'
import * as http from 'http'
import * as webpack from 'webpack'
import * as webpack_dev_middleware from 'webpack-dev-middleware'
import * as webpack_hot_middleware from 'webpack-hot-middleware'
import config from '../webpack.config'

const app = express()
const port = process.env.PORT || 3000
const dev = process.env.PROD === 'false'

import SocketManager = require('./SocketManager')

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// when a connection is made, io sends a socket to socket manager function
// var io = module.exports.io = require('socket.io')(server)change to typescript
const io = (module.exports.io = require('socket.io')(server))
io.on('connection', SocketManager)

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'frontEnd', 'index.html'))
})

if (dev) {
    const compiler = webpack(config)
    app.use(
        webpack_dev_middleware(compiler, {
            publicPath: config.output.publicPath,
            stats: { colors: true }
        })
    )

    app.use(webpack_hot_middleware(compiler))
}

app.use(express.static(path.resolve(__dirname, 'frontEnd')))
