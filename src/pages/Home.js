import { Link } from 'react-router-dom'

const Home = () =>  {
  return (
    <div className='home-main-container'>
      <h1 className='home-title'>FullStack Chat App</h1>
      <div className='home-btn-container'>
        <Link to="/signup">
          <button className='home-btn'>Signup</button>
        </Link>
        <Link to="/signin">
          <button className='home-btn'>Login</button>
        </Link>
        <Link to="/chat">
          <button className='home-btn'>Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;