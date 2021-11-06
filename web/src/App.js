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
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Posts from "./components/posts/posts"
import Splash from "./components/splashScreen/splashScreen"
import { GlobalContext } from './context/Context';
import { useContext } from "react";

import { baseUrl } from "./core"
import axios from 'axios';
import { useState, useEffect, useRef } from "react"

function App() {
  let history = useHistory();
  let { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {

    axios.get(`${baseUrl}/api/v1/posts`, {
      withCredentials: true
    })
      .then((res) => {
        console.log("res: ", res.data);

        if (res.data.email) {

          dispatch({
            type: "LOGIN",
            payload: {
              _id: res.data._id,
              name: res.data.name,
              email: res.data.email,
              contact: res.data.contact,
              website: res.data.website,
              address: res.data.address,
            }
          })
        }
        else {
          // setTimeout(() => {
          dispatch({ type: "LOGOUT" })
          // }, 10000);

        }
      }).catch((e) => {
        // setTimeout(() => {
        dispatch({ type: "LOGOUT" })
        // }, 10000);

      })

    return () => {
    };
  }, []);





  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Login project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { history.push("/") }}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => { history.push("/") }}>Login</Nav.Link>
              <Nav.Link onClick={() => { history.push("/signup") }}>Signup</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {(state.user === undefined) ?
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* <Redirect to="/" /> */}
        </Switch>
        : null}


     



      {(state.user === null) ?
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>  */}
          {/* Redirect to="/" /> */}
        </Switch> : null
      }

{(state.user) ?
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>

          {/* <Redirect to="/" /> */}
        </Switch>
        : null}







      {/* 
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
      </Switch> */}
    </>
  );
}

export default App;