import * as React from 'react'
import { VERIFY_USER } from '../Events'

// the login form component which will verify if user name is valid and allow a user to set their name before
// entering chat

interface LoginProps { 
    socket: any
    setUser: any
}

interface LoginState {
    summonerName : string
    error : string
}
export class LoginForm extends React.Component<LoginProps, LoginState> {
    constructor(props : LoginProps) {
        super(props)

        this.state = {
            summonerName: '',
            error: ''
        }
    }

    // takes an object that has a user and isUser property to verify if user is taken
    // public setUser = ({ user, isUser }) => {
    //     if (isUser) {
    //         this.setError('User name taken')
    //     } else {
    //         this.props.setUser(user)
    //     }
    // }

    public setError = (error: any) => {
        this.setState({ error })
    }
    public render() {
        const { summonerName, error } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Summoner Name?</h2>
                    </label>
                    <input
                        // ref={input => {
                        //     this.textInput = input
                        // }}
                        type="text"
                        value={summonerName}
                        onChange={this.handleChange}
                        placeholder={'MySummonerName'}
                    />
                    <div className="error">{error ? error : null}</div>
                </form>
            </div>
        )
    }
    private handleSubmit = (event: { preventDefault: () => void; }) => {
        // use preventDefault to avoid submitting event to server and staying on application
        // event.preventDefault()
        const socket = this.props.socket
        const summonerName = this.state.summonerName
        // verify_user takes temp name and callback function setUser
        socket.emit(VERIFY_USER, summonerName, this.props.setUser)
    }

    // don't need (event) in parenthesis because taking in a single parameter
    private handleChange = (event: { target: { value: string; }; }) => {
        this.setState({ summonerName: event.target.value })
    } 
}
