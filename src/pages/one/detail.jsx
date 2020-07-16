import React, {Component} from 'react'



export default class Detail extends Component {
    componentDidMount() {
      console.log("sssss")
      console.log(this)
    }
    render () {
        const {name, money, address} =  this.props.location.state.params

        return (
            <div>
              <h1>详情</h1>
              <div>{name}</div>
              <div>{money}</div>
              <div>{address}</div>
            </div>
        )
    }
}