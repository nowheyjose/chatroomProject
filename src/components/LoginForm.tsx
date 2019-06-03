import * as React from 'react'
import { VERIFY_USER } from '../Events'

// the login form component which will verify if user name is valid and allow a user to set their name before
// entering chat
export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            summonerName: '',
            error: ''
        }
    }

    // takes an object that has a user and isUser property
    setUser = ({ user, isUser }) => {
        if (isUser) {
            this.setError('User name taken')
        } else {
            this.props.setUser(user)
        }
    }

    handleSubmit = event => {
        // use preventDefault to avoid submitting event to server and staying on application
        event.preventDefault()
        const { socket } = this.props
        const { summonerName } = this.state
        // verify_user takes temp name and callback function setUser
        socket.emit(VERIFY_USER, summonerName, this.setUser)
    }

    // don't need (event) because taking in a single parameter
    handleChange = event => {
        this.setState({ summonerName: event.target.value })
    }

    setError = error => {
        this.setState({ error })
    }
    render() {
        const { summonerName, error } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Summoner Name?</h2>
                    </label>
                    <input
                        ref={input => {
                            this.textInput = input
                        }}
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
}
