import React, {Component} from 'react'

// 引入孙子组件
import SonSon from './son-son'
import {Button} from 'antd';


export default class TwoSonTwo extends Component {
    constructor(props) {
      super(props);
      console.log("constructor")
      
    }

    clickGoods(e) {
      // 在此函数中传入值
      this.props.getPrice(e);
    } 

    // 生命周期函数开始
    componentWillMount() { // 组件挂载前触发
        console.log('componentWillMount')
    }

    componentDidMount() { // 组件挂载后触发
        console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps) { // 接收到新的props时触发
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState) { // 组件更新前触发
        console.log('componentWillUpdate')
    }
    componentDidUpdate() { // 组件更新后触发
        console.log('componentDidUpdate')
    }
    componentWillUnmount() { // 组件卸载时触发
        console.log('componentWillUnmount')
    }

    // 生命周期函数结束
    render () {
        console.log("render")
        return (
            <div style={{backgroundColor:'#f4f4f4'}}>
           
                <h2>子组件：</h2>
                <h3>大儿子前来报到</h3>
                <div>大儿子看到爸爸给了二儿子1000不高兴</div>
                <div>必须要分一百给大儿子</div>
                <Button onClick={this.clickGoods.bind(this, 900)}>-100</Button>
                <SonSon></SonSon>
            </div>
        )
    }
}