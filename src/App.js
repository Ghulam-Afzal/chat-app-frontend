import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Chat from "./pages/Chat"

const App = () =>  {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/chat' exact component={Chat} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
