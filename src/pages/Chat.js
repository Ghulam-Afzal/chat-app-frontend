import Chat from "../components/ChatCore"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { setToken1 } from "../service/auth"
import { setToken2 } from "../service/groups"
import { setToken3 } from "../service/message"

const ChatMain = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect (() => {
        const data = window.localStorage.getItem("loggedinUser")
        if (data){
            const user = JSON.parse(data)
            setUserLoggedIn(user)
            setToken1(user.tokenizeUser)
            setToken2(user.tokenizeUser)
            setToken3(user.tokenizeUser)
        }
    }, [])


    const noUserScreen = () => {
        return (
            <div className='home-main-container'>
                <h1 className='home-title'>No User Signed In</h1>
                <div className='home-btn-container'>
                    <Link to="/signup">
                        <button className='home-btn'>Signup</button>
                    </Link>
                    <Link to="/signin">
                        <button className='home-btn'>Login</button>
                    </Link>
                    <Link to="/">
                        <button className='home-btn'>Home</button>
                    </Link>
                </div>                       
            </div>
        )
    }

    const logout = () => {
        window.localStorage.removeItem("loggedinUser");
        setUserLoggedIn(null)
        setToken1(null)
        setToken2(null)
        setToken3(null)
    }

    return (
        <div>
            {userLoggedIn === null ? noUserScreen() : <Chat logout={logout}></Chat>}
        </div>
    )
}

export default ChatMain