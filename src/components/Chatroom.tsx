import * as React from 'react'
import * as io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import { LoginForm } from './LoginForm'
import { ChatContainer } from './ChatContainer'

// chatroom layout
const socketUrl = 'localhost:3000'

interface ChatroomProps {
    title: string
}
interface ChatroomState {
    socket: any
    user: string
}
// P = props, S = states, look up SS
export class Chatroom extends React.Component<ChatroomProps, ChatroomState> {
    // connect to io server
    constructor(props: ChatroomProps) {
        super(props)

        this.state = {
            socket: null,
            user: null
        }
    }

    public componentWillMount() {
        this.initSocket()
    }

    public initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('Connected')
        })
        this.setState({ socket })
    }

    // set user property in state
    public setUser = (user: any) => {
        // debug this
        const socket = this.state.socket
        socket.emit(USER_CONNECTED, user)
        this.setState({ user })
    }

    // set user prop in state to null
    public logout = () => {
        const socket = this.state.socket
        socket.emit(LOGOUT)
        this.setState({ user: null })
    }
    public render() {
        const title = this.props.title
        return (
            <div className="container">
                {!this.state.user ? (
                    <LoginForm
                        socket={this.state.socket}
                        setUser={this.setUser}
                    />
                ) : (
                    <ChatContainer
                        socket={this.state.socket}
                        user={this.state.user}
                        logout={this.logout}
                    />
                )}
                {/* Login form takes two props */}
            </div>
        )
    }
}
