import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const userReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};

const commentReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return { ...state, comments: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer,
});


const store = createStore(rootReducer);


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
