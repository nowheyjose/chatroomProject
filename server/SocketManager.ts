import io = require('./server')
// import io = require('./server).io ? doesn't work
module.exports = (socket: { ID: string }) => {
    // Socket ID returning as undefined
    console.log('Socket ID ' + socket.ID)
}
