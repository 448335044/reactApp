import React, {Component} from 'react'
import './login.less'
import { Button } from 'antd';

export default class Login extends Component {

    render() {

      return (
        <div className='login'>
          <div className="content">content</div>
          <Button type="primary">Button</Button>
        </div>
      )
    }
  }