import * as React from 'react'
import * as io from 'socket.io-client'

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
    constructor(props: Readonly<{}>) {
        super(props)

        this.state = {
            socket: null
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
    public render() {
        const title = this.props
        return <div className="container">{title}</div>
    }
}
