import React, { Component } from 'react';
// 引入路由模块
// react-router react核心路由
// react-router-dom 浏览器端的路由
// react-router-native native端的路由
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// BrowserRouter: 
// HashRouter:
// Switch: 匹配的第一个子节点,找到了就不再匹配。
// Route： 路由器

// 引入自定义组件
import Login from './pages/login/login'
import Admin from './pages/admin/admin'



export default class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
          </Switch>
       </BrowserRouter>
    );
  }
}



