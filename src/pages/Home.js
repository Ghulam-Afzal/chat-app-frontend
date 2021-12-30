import React, { useState, useEffect } from 'react';
// import { socket } from './service/socket';
import Login from './SignIn'

const Home = () =>  {
  const [user, setUser] = useState(null)
  const [groups, setGroups] = useState([])

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedinUser')
    if (loggedInUser) {
      const userInfo = JSON.parse(loggedInUser)
      setUser(userInfo)
      setGroups(userInfo.groups)
    }
  }, [])

  return (
    <div>
        <h1>User: {user.username}</h1>
      <ul>
          {groups.map((group) => {
            return (
              <li key={group.id}>
                <button>{group.name}</button>
              </li>
            )
          })}
      </ul>
      <Login />
    </div>
  )
}

export default Home;