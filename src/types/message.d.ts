type MessageItem = {
    id: number
    text: string
    sender: string
    full_name: string
    avatar: string
    dateTime: string | any
    unread_messages_count: number
}
type Message = {
    id: number
    text: string
    dateTime: string | any
    sender: {
        id: number
        full_name: string
        avatar: string
        text: string
        dateTime: string | any
    } | null
}