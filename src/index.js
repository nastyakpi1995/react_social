import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import {MyContext} from './StoreContext';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <MyContext.Provider value={store}>
                <BrowserRouter>
                <App />
            </BrowserRouter>
            </MyContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)