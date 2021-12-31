import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Chat from "./pages/Chat"

const App = () =>  {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signin' exact element={<Login />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/chat' exact element={<Chat />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
