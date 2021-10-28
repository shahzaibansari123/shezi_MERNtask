import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Posts from "./components/posts/posts"

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </>
  );
}

export default App;