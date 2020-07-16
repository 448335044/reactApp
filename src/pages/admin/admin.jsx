import React, {Component} from 'react'


import './admin.less'
//引入自定义头部组件
import Hearder from '../../componments/header/header'
import LeftMenu from '../../componments/leftMenu/left-menu.jsx'
import Content from '../../componments/content/content'



export default class Admin extends Component {


    render() {
      return (
        <div className='admin'>
          {/* 头部 */}
          <Hearder></Hearder>
          {/* 内容 */}
          <div className="content">
          <LeftMenu></LeftMenu>
          <Content></Content>
          </div>
        </div>
      )
    }
  }