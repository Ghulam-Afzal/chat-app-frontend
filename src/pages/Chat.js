import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { initializeUser, createGroup, joinGroup, leaveGroup } from "../reducers/authReducer"
import { initializeMessages, newMessage, socketNewMessage } from "../reducers/messageReducer"
import { socket } from "../service/socket"
import "../App.css"
import Message from "../components/Messages"
import GroupPanel from "../components/GroupPanel"
import JoinGroup from "../components/JoinGroup"
import LeaveGroup from "../components/LeaveGroup"
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import CreateGroupModel from "../components/CreateGroupModel"
import { initializeGroups } from "../reducers/groupReducer"


const Chat = () => {
    const messages = useSelector(state => state.messages)
    const userInfo = useSelector(state => state.user)
    const allGroups = useSelector(state => state.groups)
    const [curGroup, setCurGroup] = useState()
    const [msg, setMessage] = useState("")
    const [show, setShow] = useState(false)
    const [groupName, setGroupName] = useState('')
    const dispatch = useDispatch()

    let user; 
    let userId; 
    const data = window.localStorage.getItem("loggedinUser")
    if (data) {
        const loggedInUser = JSON.parse(data)
        user = (loggedInUser.username)
        userId = loggedInUser.id
    }

      console.log(userId)
    socket.off('s-message').on("s-message", (message) => {
        if (message.groupId === curGroup){
            dispatch(socketNewMessage(message))
        }
    })

    useEffect(() => {
        dispatch(initializeUser(userId))
        dispatch(initializeGroups())
    }, [dispatch])
    
    const handleCreate = (event) => {
        event.preventDefault()
        if (groupName.length > 0){
            dispatch(createGroup(user, groupName, userId))
            setGroupName("")
        }
    }

    const handleJoin = (groupId) => {
        dispatch(joinGroup(userId, groupId))
    }

    const handleLeave = (groupId) => {
        dispatch(leaveGroup(userId, groupId))
    }

    const getGroupMessages = (groupId) => {
        dispatch(initializeMessages(groupId))
        setCurGroup(groupId)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
            if(curGroup){
                if (msg.length !== 0){
                    dispatch(newMessage(userId, msg, curGroup))
                    setMessage("")
                }
        }
    }

    const handleClose = () => {
        setShow(false)
    }
    const noUserScreen = () => {
        return (
            <div>No User Signed In</div>
        )
    }
    
    const logout = () => {
        window.localStorage.removeItem("loggedinUser");
        user = null
    }

    const chat = () => {
        return (
            <div className="contianer">
                <CreateGroupModel handleClose={handleClose} handleCreate={handleCreate} show={show} groupName={groupName} setGroupName={setGroupName}/>
                <LeaveGroup groups={userInfo} leaveGroup={handleLeave} />
                <JoinGroup allGroups={allGroups} userGroups={userInfo} handleJoin={handleJoin}  />
                <IoIosAddCircleOutline onClick={() => setShow(!show)}/>
                <GroupPanel username={user} groups={userInfo} handleCreate={handleCreate} handleJoin={handleJoin} handleLeave={handleLeave} getGroupMessages={getGroupMessages}/>
                <div className="right">
                  <Message messages={messages} />
                  <form className="input-from" onClick={handleSubmit}>
                      <input name="msg" type="text" value={msg} onChange={(e) => setMessage(e.target.value)}></input>
                      <button type="submit">Send</button>
                  </form>
                  <button onClick={logout}>Logout</button>
              </div>
            </div>
          )
    }

    return (
        <div>
            {user === null ? noUserScreen() : chat()}
        </div>
    )
}

export default Chat