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
        // do I even need this socket.user? .user property does not exist
        // socket.use = user

        // broadcast to all sockets connected to io session with io.emit, sends new user list and user_connected
        io.emit(USER_CONNECTED)
        console.log(connectedUsers)
    })
}
export { socketManager }


// add user to list passed in
// userList {object} with key value pairs of Users
// user {User} to be added
// return userList
function addUser(userList: {}, user: { name: string }) {
   const newList : any = {...userList}
    newList[user.name] = user
    return userList
}

// remove user from list of all users 
// userList {object} with key value pairs of Users
// username {string} name of user to be removed
function removeUser(userList: {}, username: string) {
    const newList : any = {...userList}
    delete newList[username]
    return userList
}

function isUser(userList: {}, username: string) {
    return username in userList
}
