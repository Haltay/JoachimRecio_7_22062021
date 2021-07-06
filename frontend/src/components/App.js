import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from './Login';
import Register from "./Register";
import Home from "./HomePost/Home";
import Logout from "./Logout";

import Accueil from './Accueil';
import NewPost from './HomePost/Newpost';


class App extends React.Component {

    isAuthenticated() {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; token=`);

        return parts.length === 2;
    }

    render() {
        const isAuthenticated = this.isAuthenticated();

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        { isAuthenticated ? <Redirect to="/" /> : <Accueil /> }
                    </Route>
                    <Route exact path="/login">
                        { isAuthenticated ? <Redirect to="/" /> : <Login /> }
                    </Route>
                    <Route exact path="/register">
                        { isAuthenticated ? <Redirect to="/" /> : <Register /> }
                    </Route>
                    <Route exact path="/logout">
                        { isAuthenticated ? <Logout /> : <Redirect to="/" />  }
                    </Route>
                    <Route path="/home">
                        { isAuthenticated ? <Home /> : <Redirect to="/login" /> }
                    </Route>
                    <Route path="/newpost">
                        { isAuthenticated ? <NewPost /> : <Redirect to="/newpost" /> }
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
