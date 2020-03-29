import React from "react";
import ReactDOM from "react-dom";
import './styles/style.scss';
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from './App.js';

class Index extends React.Component {
    render() {
        return(
            <Provider store={ store } >
                <App />
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
