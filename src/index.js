import React from "react";
import ReactDOM from "react-dom";
import './styles/style.scss';
import PeopleList from "./components/peopleList.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

class Index extends React.Component {
    render() {
        return <Provider store={ store } >
            <PeopleList />
        </Provider>
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
