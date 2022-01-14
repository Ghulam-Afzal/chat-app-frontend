import { useEffect, useRef } from "react"


const Message = ({ messages }) => {

    const messagesRef = useRef(null)
    const scrollToBottom = () => {
        messagesRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    if (messages.length === 0) {
        return (
            <div>
                <p>There are no messages in this group</p>
            </div>
        )
    }
    else {
        return (
            <div className="messages-cont">
                {messages.map((message) => {
                    return (
                        // {message.user.username}
                    <p className="messages" key={message.id}> {message.user.username} : {message.message}</p>
                    )})}
                    <div ref={messagesRef}/>
            </div>
        )
    }
}


export default Message