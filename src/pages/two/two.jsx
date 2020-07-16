import React, {Component} from 'react'


// 引入儿子们
import TwoSonOne from './two-son-one'
import TwoSonTwo from './two-son-two'

// 创建Context
const PriceContext = React.createContext('price')

export default class Two extends Component {

     //构造函数
     constructor() {
        super();
        // 设置state
        this.state = {
            price: 1000,
            flage:true
        };
    }

    // 传到子组件让其调用
    getItemPrice(e) {
        if(this.state.flage) {
            this.setState({
              price: e,
              flage:false
            });
        } else {
            alert("不能再减了")
        }
    }


    // 父传孙
    // 点击按钮事件
    clickGoods(e) {
        this.setState({
        price:e
        })
    }

    render () {

        let { price } = this.state;

        return (
            <div style={{backgroundColor:'#e5e5e5'}}>
                <h1>组件来通信</h1>
                <h2>父组件:</h2>
                <div>爸爸偷藏的私房钱：{price}</div>
                <div style={{display:'flex',width:'600px',margin:'50px auto'}}>
                   {/* 父传子 */}
                    <TwoSonOne price={price}  />

                    {/* 子传父 */}
                    {/* 子组件向父组件通信的基本思路是，
                    父组件向子组件传一个函数，
                    然后通过这个函数的回调，
                    拿到子组件传过来的值。 */}
                    <TwoSonTwo  getPrice={this.getItemPrice.bind(this)} ></TwoSonTwo>
                </div>

                <h1>父传孙：</h1>
                {/* Provider
                把state里price转到Provider的value中 */}
                <PriceContext.Provider value={price}>
                    <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
                    <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
                    <TwoSonTwo></TwoSonTwo>
                </PriceContext.Provider>  



            </div>
        )
    }
}
