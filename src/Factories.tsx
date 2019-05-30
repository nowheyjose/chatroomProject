import { v4 } from 'uuid'

const createUser = ({ name = '' } = {}) => ({
    id: v4(),
    name
})

const createMessage = ({ message = '', sender = '' } = {}) => ({
    id: v4(),
    time: getTime(new Date(Date.now())),
    message,
    sender
})

// correct this
const createChat = ({
    messages = [],
    name = 'Community',
    users = []
} = {}) => ({
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
