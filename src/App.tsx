import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
