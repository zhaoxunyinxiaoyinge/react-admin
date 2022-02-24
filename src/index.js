import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { baseRouter } from "./router";
import {Provider} from "react-redux"
import {store} from "./store/store.js"
import runMock from "./mock/mock";


ReactDOM.render(
  <Provider  store={store}>
  <Router>
    <Switch>
      <Route
        path="/admin"
        render={(routeProps) => <App {...routeProps} />}
      ></Route>
      {baseRouter.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.pathname}
            component={item.component}
          ></Route>
        );
      })}
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);

runMock();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
