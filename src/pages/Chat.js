import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser, createGroup, joinGroup, leaveGroup } from "../reducers/authReducer"
import { initializeMessages, newMessage, socketNewMessage } from "../reducers/messageReducer"
import { socket } from "../service/socket"
import "../App.css"
import Message from "../components/Messages"
import GroupPanel from "../components/GroupPanel"

const Chat = () => {
    const messages = useSelector(state => state.messages)
    const userInfo = useSelector(state => state.user)
    const [curGroup, setCurGroup] = useState()
    const [msg, setMessage] = useState("")
    const dispatch = useDispatch()
    
    let user; 
    let userId; 
    const data = window.localStorage.getItem("loggedinUser")
    if (data) {
        const loggedInUser = JSON.parse(data)
        user = loggedInUser.username
        userId = loggedInUser.id
    }

    socket.off('s-message').on("s-message", (message) => {
        if (message.groupId === curGroup){
            dispatch(socketNewMessage(message))
        }
    })

    useEffect(() => {
        dispatch(initializeUser(userId))
    }, [dispatch])
    
    const handleCreate = () => {
        dispatch(createGroup("bob", "usergROUSPDTETST", 2))
    }

    const handleJoin = () => {
        dispatch(joinGroup(6, "5ef7e1f4-a1e5-4600-bc8a-b6f7546660be"))
    }

    const handleLeave = () => {
        dispatch(leaveGroup(2, "7e8e4102-025f-40af-8f94-4615789e2800"))
    }

    const getGroupMessages = (groupId) => {
        dispatch(initializeMessages(groupId))
        setCurGroup(groupId)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (msg.length !== 0){
            dispatch(newMessage(userId, msg, 1))
            setMessage("")
        }
    }
    return (
      <div className="contianer">
          <GroupPanel username={user} groups={userInfo} handleCreate={handleCreate} handleJoin={handleJoin} handleLeave={handleLeave} getGroupMessages={getGroupMessages}/>
          <div className="right">
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