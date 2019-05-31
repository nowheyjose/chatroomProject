import * as React from 'react'
import * as io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'

interface ButtonProps {
    hideButton: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <div className="container">
            <a onClick={props.hideButton}>TO-DO: Open chatroom</a>
        </div>
    )
}
// chatroom layout
const socketUrl = 'localhost:3000'
interface ChatroomState {
    socket: any
    user: string
}
// P = props, S = states, look up SS
export class Chatroom extends React.Component<string, ChatroomState> {
    // connect to io server
    constructor(props: any) {
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
        const title = this.props
        return <div className="container">{title}</div>
    }
}
