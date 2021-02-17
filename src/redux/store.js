import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { AppState } from "./reducer";

export default createStore(AppState,applyMiddleware(thunk));