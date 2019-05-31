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
                    {/* portal's job is to show either homepage or chatroom, portal is parent of homepage & chatroom  */}
                    {/* render HOMEPAGE which renders BUTTON (a component that takes a callback that's invoked when it's clicked)
                        
                    */}

                    <Button hideButton={this.hideButton} />
                </div>
            )
        } else {
            elements.push(
                // render chatroom component
                // portal single functional component that switches between homepage or selecting button
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

    // show home page or hide homepage, if homepage is hidden, show chatroom
    private showButton = () => {
        this.setState({ showButton: true })
    }

    private hideButton = () => {
        this.setState({ showButton: false })
    }
}
