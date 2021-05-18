import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api";
// axios.get('/users')

// *** If REM REST API is DOWN ***
// comment withCredentials line
// replace baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api'

const sagaMiddleware = createSagaMiddleware();

// ** CREATE STORE **
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>,
	// </React.StrictMode>
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
