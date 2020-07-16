import React, {Component} from 'react'

export default class TwoSonOne extends Component {

   



    render () {

       
        return (
            <div style={{marginRight:100,backgroundColor:'#f4f4f4'}}>
                <h2>子组件：</h2>
                <h3>二儿子前来报到</h3>
                <div>二儿子收到爸爸的钱: {this.props.price}</div>
            </div>

        )
    }
}