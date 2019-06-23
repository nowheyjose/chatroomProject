import * as React from 'react'

interface ChatProps {
    socket: any
    user: string
    logout: () => void
}

// chat container not rendering upon login need to fix
export class ChatContainer extends React.Component<ChatProps> {
    public render() {
        return <div>Chat Container</div>
    }
}
