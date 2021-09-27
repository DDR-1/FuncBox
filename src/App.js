import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
