import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './content.less'

// 引入自定义组件
// import Admin from '../../pages/admin/admin'
import One from '../../pages/one/one'
import Detail from '../../pages/one/detail'
import Two from '../../pages/two/two'


export default class Content extends Component {



    render() {

      return (
        <div className='content-box'>
          <Switch>
            <Redirect from='/' exact to='/admin'/>
            <Route path='/one' component={One}/>
            <Route path='/detail' component={Detail}/>

            <Route path='/two' component={Two}/>
            {/* <Route path='/category' component={Category}/>
            <Route path='/product' component={Product}/>
            <Route path='/user' component={User}/>
            <Route path='/role' component={Role}/>
            <Route path="/charts/bar" component={Bar}/>
            <Route path="/charts/pie" component={Pie}/>
            <Route path="/charts/line" component={Line}/>
            <Route path="/order" component={Order}/> */}
            {/* <Route component={NotFound}/> */}
          </Switch>
        </div>
      )
    }
  }