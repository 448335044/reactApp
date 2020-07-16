import React, {Component} from 'react'
import {Button} from 'antd';

// 创建Context
const PriceContext = React.createContext('price')

export default class SonSon extends Component {
     

    render () {
        return (
            <div style={{backgroundColor:'#fff'}}>
                <h2>孙子组件：</h2>
                <Button >孙子也跑来了</Button>


                {/* Consumer,注意Consumer的下面要包含一个函数 */}
                <PriceContext.Consumer>
                    {
                    price=><span>孙子收到的钱：{price}</span>
                    }
                </PriceContext.Consumer>
            </div>
        )
    }
}