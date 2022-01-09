import { useSelector, useDispatch } from "react-redux"
import Chat from "../components/ChatCore"
import { handleLoginState } from "../reducers/loginReducer"
import { Link } from "react-router-dom"

const Temp = () => {
    const userLoggedIn = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()

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
                    <Link to="/Home">
                        <button className='home-btn'>Home</button>
                    </Link>
                </div>                       
            </div>
        )
    }

    const logout = () => {
        window.localStorage.removeItem("loggedinUser");
        dispatch(handleLoginState())
    }

    return (
        <div>
            {userLoggedIn === false ? noUserScreen() : <Chat logout={logout}></Chat>}
        </div>
    )
}

export default Temp 