import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/post/:id">
              <PostDetail />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
