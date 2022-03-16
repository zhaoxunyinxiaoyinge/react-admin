import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect} from "react-router-dom";
import Layout from "./layout";
import NotFound from "./components/notFound";
import { Pageation, User, Welcome, Svg,Roles,Menu,Dictor} from "./views/index"

const App = class extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        <Layout> 
            <Route exact path ="/welcome" component={Welcome}></Route>
            <Route exact path="/pagepation" component={Pageation}></Route>
            <Route exact path="/svg-group" component={Svg}></Route>
            <Route exact path="/stylem/user" component={User}></Route>
            <Route exact path="/stylem/roles" component={Roles}></Route>
            <Route exact path="/stylem/menu" component={Menu}></Route>  
            <Route exact path="/stylem/dictor" component={Dictor}></Route>   
        </Layout>
        <Route exact path="/404" component={NotFound}></Route> 
        <Redirect exact to="/welcome" from="/"></Redirect>
        <Route component={NotFound}  to="/404"></Route>
      </Switch>
    );
  }
};

export default App;
