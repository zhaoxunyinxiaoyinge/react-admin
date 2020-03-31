import React from 'react';
import {Route,Switch,Redirect} from "react-router-dom"
import {AdminRouter} from "./routes"
import {Menus} from "./Components/"
import './App.css';
function App() {
  return (
    <div className="App">
        <Menus>
            <Switch>
            <Redirect to='/Admin/list' from='/Admin' exact />
            {
             AdminRouter.map((item,index)=>{
                return <Route exact={item.exact}  key={index} path={item.pathname} component={item.component} />
             })
            }
            <Redirect to='/404' />
            </Switch>
        </Menus>
    </div>
  );
}
export default App;
