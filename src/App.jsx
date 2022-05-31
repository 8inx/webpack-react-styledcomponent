
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

const App = () => {
  return(
    <Router>
      <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
      </Switch>
    </Router>
  )
}
export default App;