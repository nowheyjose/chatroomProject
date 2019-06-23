import * as React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {
    TYPING,
    LOGOUT,
    MESSAGE_SENT,
    MESSAGE_RECEIVED,
    COMMUNITY_CHAT
} from '../Events'

interface ChatProps {
    socket: any
    user: string
    logout: () => void
}

interface ChatState {
    chats: []
    activeChat: null
}

// chat container not rendering upon login need to fix
export class ChatContainer extends React.Component<ChatProps, ChatState> {
    constructor(props: ChatProps) {
        super(props)

        this.state = {
            chats: [],
            activeChat: null
        }
    }

    public componentDidMount() {
        const socket = this.props.socket
        socket.emit(COMMUNITY_CHAT)
    }

    public sendMessage = (chatId: any, message: string) => {
        const socket = this.props.socket
        socket.emit(MESSAGE_SENT, { chatId, message })
    }

    public sendTyping = (chatId: any, isTyping: boolean) => {
        const socket = this.props.socket
        socket.emit(TYPING, { chatId, isTyping })
    }
    // const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}}`
    // const typingEvent = `${TYPING}-${chat.id}}`
    // socket.on(typingEvent)
    // socket.on(messageEvent, this.addMessagetoChat(chat.id))
    // public addMessageToChat = chatId => {
    //     return message => {
    //         const chats = this.state.chats
    //         const newChats = chats.map((chat))=>{
    //             if(chat.id === chatId)
    //                 chat.messages.push(message)
    //             return chat
    //         })
    //         this.setState({chats:newChats})
    //     }
    // }

    public render() {
        return (
            // <div>Chat Container</div>
            <div className="chat-room-container">
                <div className="chat-room">
                    {/* <Messages messages={} user={this.props.user} typingUsers={} /> */}
                    <Messages />
                    <MessageInput
                    // sendMessage={message:string => {
                    //     this.sendMessage(id, message)
                    // }}
                    // sendTyping={isTyping => {
                    //     this.sendTyping(id, isTyping)
                    // }}
                    />
                </div>
            </div>
        )
    }
}
