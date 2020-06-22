import React from "react";
import ReactDOM from "react-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./scss/main.scss";
import { store, rrfProps } from "./redux/store";

import App from "./app";
import ScrollToUp from "./components/ScrollToUp/";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <ScrollToUp />
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
