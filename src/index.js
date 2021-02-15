import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./wu-icons-style.min.css";
import "./style.css";
import { App } from './components/app';
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));