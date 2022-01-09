import React, { useState } from "react"
import authService from '../service/auth'
import { Redirect } from "react-router-dom"
import { handleLoginState } from "../reducers/loginReducer"
import { useDispatch } from "react-redux"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch()

    const login = async (event) => {
        event.preventDefault()

        try {
            const obj = {
                username: username, 
                password: password
            }
            const user = await authService.login(obj)
            window.localStorage.setItem("loggedinUser", JSON.stringify(user))
            dispatch(handleLoginState())
            setRedirect(true)
        } catch (error){
            console.log(error)
        }
        setUsername('')
        setPassword('')
    }

    const form = () => {
        return (
            <div className='from-contianer'>
                <form onSubmit={login}>
                <h3>Signin</h3>
                    <p>Username: </p>
                    <input className="form-input" name="username" onChange={(e) => setUsername(e.target.value)} />
                    <p>Password: </p>
                    <input className="form-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className='form-submit' type="submit">Login</button>
                </form>
            </div>
        )
    }

    return <div>{redirect === false ? form() : <Redirect to="/" />}</div>;
 
}

export default Login