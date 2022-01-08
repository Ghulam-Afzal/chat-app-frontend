import { useState } from 'react'
import authService from '../service/auth'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [redirect, setRedirect] = useState(false);

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
           const user = await authService.signup(obj)
           setRedirect(true)
        } catch (err) {
          console.log(err);
        }
      };

    const form = () => {
      return (
        <div className='from-contianer'>
            <div style={showError ? {color:'red'} : {display:'none'}}>{errorMessage}</div>
            <form onSubmit={handleSubmit}>
              <h3>Signup</h3>
                <fieldset>
                  <p>Username:</p>
                    <input className="form-input" name="username" onChange={(e) => setUsername(e.target.value)} />
                    <p>Password:</p>
                    <input className="form-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <p>Re-enter Password:</p>
                    <input className="form-input" type="password" name="password2" onChange={(e) => setPassword2(e.target.value)} />
                </fieldset>
                <button className='form-submit' type="submit">Submit</button>
            </form>
        </div>
      )
    }

    return  <div>{redirect === false ? form() : <Redirect to="/" />}</div>;
}

export default SignUp