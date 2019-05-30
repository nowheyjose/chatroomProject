import * as React from 'react'
import * as io from 'socket.io-client'
import { constants } from '../Events'

interface ButtonProps {
    hideButton: () => void
}

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <div className="container">
            {/* <div className = "row">
                <div className = "col s12"><History/></div>
                <div className = "col s12"><TextBox/></div>
            </div> */}
            <a onClick={props.hideButton}>TO-DO: Open chatroom</a>
        </div>
    )
}
// chatroom layout
const socketUrl = 'localhost:3000'

export class Chatroom extends React.Component {
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
        const socket: any = this.state
        socket.emit(constants.USER_CONNECTED, user)
        this.setState({ user })
    }

    // set user prop in state to null
    public logout = () => {
        const socket: any = this.state
        socket.emit(constants.LOGOUT)
        this.setState({ user: null })
    }
    public render() {
        const title = this.props
        return <div className="container">{title}</div>
    }
}
