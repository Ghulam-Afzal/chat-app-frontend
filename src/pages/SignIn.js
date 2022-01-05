import React, { useState } from "react"
import authService from '../service/auth'
import { Redirect } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);

    const login = async (event) => {
        event.preventDefault()

        try {
            const obj = {
                username: username, 
                password: password
            }
            const user = await authService.login(obj)
            window.localStorage.setItem("loggedinUser", JSON.stringify(user))
            setRedirect(true)
        } catch (error){
            console.log(error)
        }
        setUsername('')
        setPassword('')
    }

    const form = () => {
        return (
            <div>
                <form onSubmit={login}>
                    Username: <input className="form-input" name="username" onChange={(e) => setUsername(e.target.value)} />
                    Password: <input className="form-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

    return <div>{redirect === false ? form() : <Redirect to="/" />}</div>;
 
}

export default Login