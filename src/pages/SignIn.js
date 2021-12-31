import React, { useState } from "react"
import authService from '../service/auth'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const login = async (event) => {
        event.preventDefault()

        try {
            const obj = {
                username: username, 
                password: password
            }
            const user = await authService.login(obj)
            window.localStorage.setItem("loggedinUser", JSON.stringify(user.data))
        } catch (error){
            console.log(error)
        }
        setUsername('')
        setPassword('')
    }

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

export default Login