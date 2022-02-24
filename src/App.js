import React from "react";
import "./App.css";
import { danyRoute } from "./router";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout";
function App(props, context) {
  return (
    <Layout>
      <Switch>
        {danyRoute.map((item, index) => {
          return (
            <Route exact  path={item.pathname} key={index}>
              {<item.component />}
            </Route>
          );
        })}

        {/* <Redirect to="/admin/danborad" from="/admin"></Redirect> */}
        <Redirect to="/404"></Redirect>
        
      </Switch>
    </Layout>
  );
} 

export default App;
