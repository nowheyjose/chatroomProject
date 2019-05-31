import { v4 } from 'uuid'
interface Message {
    id: string
    time: string
    message: string
    sender: string
}
const createUser = ({ name = '' } = {}) => ({
    id: v4(),
    name
})

type test = (a: { message?: string; sender?: string }) => Message
const createMessage: test = ({ message = '', sender = '' } = {}) => ({
    id: v4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
})

// Array<>
const createChat: (a: {
    messages?: Message[]
    name?: string
    users?: string[]
}) => {
    id: string
    name: string
    messages: Message[]
    users: string[]
    typingUsers: string[]
} = ({ messages = [], name = 'Community', users = [] } = {}) => ({
    id: v4(),
    name,
    messages,
    users,
    typingUsers: []
})

// get time in 00:00 - 23:59 format
const getTime = (date: any) => {
    return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
}
