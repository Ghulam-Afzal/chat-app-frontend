import { useState } from 'react'
import axios from 'axios'


const signup_url = 'http://127.0.0.1:8080/api/auth/signup'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== password2) {
            setErrorMessage('passwords do not match'); 
            setShowError(true)
            return 
        }
        if (username === "" || password === '' || password2 === ''){
          setErrorMessage("Missing Inputs")
          setShowError(true)
          return 
        }
        if (!regularExpression.test(password)) {
          setErrorMessage("Password should contain atleast 1 uppercase and 1 number")
          setShowError(true)
          return 
        }
        try {
            const obj = {
                username: username, 
                password: password
            }
           const user = await axios.post(signup_url, obj)
           console.log(user)
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div>
            <div style={showError ? {color:'red'} : {display:'none'}}>{errorMessage}</div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    Username: <input className="form-input" name="username" onChange={(e) => setUsername(e.target.value)} />
                    Password: <input className="form-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    Re-enter Password: <input className="form-input" type="password" name="password2" onChange={(e) => setPassword2(e.target.value)} />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp