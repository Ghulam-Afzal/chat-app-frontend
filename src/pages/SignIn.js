import React, { useState } from "react";
import axios from 'axios'

const signin_url = 'http://127.0.0.1:8080/api/auth/signin'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errormsg, setErrorMsg] = useState('')


    const login = async (event) => {
        event.preventDefault()

        try {
            const obj = {
                username: username, 
                password: password
            }
            const user = await axios.post(signin_url, obj)
            // console.log(user)
            // console.log(user.data)
            window.localStorage.setItem("loggedinUser", JSON.stringify(user.data))
        } catch (error){
            console.log(error)
            // setErrorMsg()
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