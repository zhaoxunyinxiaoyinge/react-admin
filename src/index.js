import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import {Provider} from "react-redux"
import  Store from "./store/store"
import {MapRouter} from "./routes"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
ReactDOM.render(
    <Provider store={Store}>
         <BrowserRouter>
         <Switch>
             <Route  path="/Admin" render={()=>{
                 //权限认证
               return  <App />
             }} />
             {MapRouter.map(item=>{
              return <Route key={item.title} exact={item.exact} path={item.pathname} component={item.component} />
             })}
             <Redirect to="/Login" from='/' exact/>
             <Redirect to='/404' exact/>
         </Switch>
         </BrowserRouter>
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
