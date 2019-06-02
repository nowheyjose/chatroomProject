import * as React from 'react'
import { HomePage } from './HomePage'
import { Chatroom } from './Chatroom'

interface PortalState {
    showHomepage: boolean
}

export class Portal extends React.Component<{}, PortalState> {
    constructor() {
        super({})
        this.state = {
            showHomepage: true
        }
    }
    public render() {
        const elements: Array<React.ReactElement<any>> = []
        if (this.state.showHomepage) {
            elements.push(
                // using jsx and giving hideHomepage a reference to it's function
                <HomePage hideHomepage={this.hideHomepage} />
            )
        } else {
            elements.push(
                // render chatroom component
                // portal single functional component that switches between homepage or selecting button
                <Chatroom title="Test" />
            )
        }

        return elements
    }

    // show home page or hide homepage, if homepage is hidden i.e. button was clicked, show chatroom
    private showHomepage = () => {
        this.setState({ showHomepage: true })
    }

    private hideHomepage = () => {
        this.setState({ showHomepage: false })
    }
}
