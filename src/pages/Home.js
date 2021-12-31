import { Link } from 'react-router-dom'

const Home = () =>  {
  return (
    <div>
      <h1>FullStack Chat App</h1>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/signin">
        <button>Login</button>
      </Link>
      <Link to="/chat">
        <button>Chat</button>
      </Link>
    </div>
  )
}

export default Home;