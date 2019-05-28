import * as React from 'react'
import { Button } from './Chatroom'

interface HelloProps {
    compiler: string
    framework: string
    bundler: string
}

interface HelloState {
    showButton: boolean
}
export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {
            showButton: false
        }
    }

    public render() {
        const elements: Array<React.ReactElement<any>> = []
        if (this.state.showButton) {
            elements.push(
                <div>
                    {/* render CHATROOM COMPONENT HERE
                    <Chatroom/> */}
                    <Button hideButton={this.hideButton} />
                </div>
            )
        } else {
            elements.push(
                <div className="container">
                    <h1> Hi! </h1>
                    <h2>
                        {' '}
                        I got banned from League of Legends so I made this site
                        so you can <b>rage</b>.{' '}
                    </h2>
                    <a
                        className="waves-effect waves-light btn-large orange pulse"
                        onClick={this.showButton}
                    >
                        Start Flaming
                    </a>
                </div>
            )
        }

        return elements
    }

    private showButton = () => {
        this.setState({ showButton: true })
    }

    private hideButton = () => {
        this.setState({ showButton: false })
    }
}
