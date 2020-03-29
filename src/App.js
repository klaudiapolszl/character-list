import React from "react";
import "./styles/style.scss";
import "./styles/responsive.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import  PeopleList  from "./components/peopleList.jsx";
import  PersonDetails  from "./components/personDetails.jsx";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/person/:id" component={ PersonDetails }/>
                <Route path="/" component={ PeopleList }/>
            </Switch>
        </Router>
    );
}

export default App;
