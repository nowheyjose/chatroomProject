import { io } from './server'
import { Socket } from 'socket.io'
import { VERIFY_USER, USER_CONNECTED, LOGOUT } from '../src/Events'
import { createUser, createMessage, createChat } from '../src/Factories'

let connectedUsers = {}

const socketManager = (socket: Socket) => {
    console.log('Socket ID ' + socket.id)
    // verify user is the event. on also takes a function that takes user nickname and callback function, defined in loginform
    socket.on(VERIFY_USER, (username, callback) => {
        // isUser takes connectedUser object and username string
        if (isUser(connectedUsers, username)) {
            // user callback function
            callback({ isUser: true, user: null })
        } else {
            callback({ isUser: false, user: createUser({ name: username }) })
        }
    })

    socket.on(USER_CONNECTED, user => {
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user

        // broadcast to all sockets connected to io session with io.emit, sends new user list and user_connected
        io.emit(USER_CONNECTED)
        console.log(connectedUsers)
    })
}
export { socketManager }

function addUser(userList: {}, user: { name: string }) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
}

function removeUser(userList: {}, username: string) {
    const newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

function isUser(userList: {}, username: string) {
    return username in userList
}
