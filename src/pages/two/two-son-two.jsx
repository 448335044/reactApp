import React, {Component} from 'react'

// 引入孙子组件
import SonSon from './son-son'
import {Button} from 'antd';


export default class TwoSonTwo extends Component {
    clickGoods(e) {
      // 在此函数中传入值
      this.props.getPrice(e);
    } 

    render () {
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