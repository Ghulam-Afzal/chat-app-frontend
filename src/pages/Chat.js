import { useEffect, useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser, createGroup, joinGroup, leaveGroup } from "../reducers/authReducer"
import { initializeMessages, newMessage } from "../reducers/messageReducer"
import { socket } from "../service/socket"
import "../App.css"
import Message from "../components/Messages"

const Chat = () => {
    const messages = useSelector(state => state.messages)
    const userInfo = useSelector(state => state.user)
    const [curGroup, setCurGroup] = useState()
    const [msg, setMessage] = useState("")
    const messagesRef = useRef(null)
    const dispatch = useDispatch()
    
    let user; 
    const data = window.localStorage.getItem("loggedinUser")
    if (data) {
        const loggedInUser = JSON.parse(data)
        user = loggedInUser.username
    }

    useEffect(() => {
        dispatch(initializeUser(2))
    }, [dispatch])

    // const scrollToBottom = () => {
    //     messagesRef.current?.scrollIntoView({ behavior: "smooth" })
    // }

    // useEffect(() => {
    //     scrollToBottom()
    // }, [messages])
    
    const handleCreate = () => {
        dispatch(createGroup("bob", "usergROUSPDTETST", 2))
    }

    const handleJoin = () => {
        dispatch(joinGroup(2, "7e8e4102-025f-40af-8f94-4615789e2800"))
    }

    const handleLeave = () => {
        dispatch(leaveGroup(2, "7e8e4102-025f-40af-8f94-4615789e2800"))
    }

    const getGroupMessages = (groupId) => {
        if (curGroup !== groupId){
            socket.emit("leave-room", groupId)
        }
        dispatch(initializeMessages(groupId))
        setCurGroup(groupId)
        socket.emit('join-room', groupId)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (msg.length !== 0){
            dispatch(newMessage(2, msg, 1))
            setMessage("")
        }
    }
    return (
      <div className="contianer">
          <div className="left">
            <h1>User: {user}</h1>
            <h3>Groups</h3>
            <ul>
                {userInfo.map((group) => {
                    return (
                        <li key={group.id}>
                            <button onClick={() => getGroupMessages(group.id)}>{group.name}</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={handleCreate}>Create Group</button>
            <button onClick={handleJoin}>Join Group</button>
            <button onClick={handleLeave}>Leave Group</button>
          </div>
          <div className="right">
              {/* <div className="messages">
                {messages.map((message) => {
                        return (
                            <li key={message.id}> : {message.message}</li>
                        )
                    })}
                    <div ref={messagesRef}/>
            </div> */}
            <Message messages={messages} />
            <form className="input-from" onClick={handleSubmit}>
                <input name="msg" type="text" value={msg} onChange={(e) => setMessage(e.target.value)}></input>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    )
}

export default Chat