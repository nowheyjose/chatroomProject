import { io } from './server'
import { Socket } from 'socket.io'
// import io = require('./server).io ? doesn't work
const socketManager = (socket: Socket) => {
    // Socket ID returning as undefined
    // add to inside of here
    console.log('Socket ID ' + socket.id)
}
export { socketManager }
