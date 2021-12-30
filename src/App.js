import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () =>  {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
