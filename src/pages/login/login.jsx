import React, {Component} from 'react'
import './login.less'
import { Form, Input, Button } from 'antd';


class Login extends Component {

    /*
  对密码进行自定义验证
  */
  /*
   用户名/密码的的合法性要求
     1). 必须输入
     2). 必须大于等于4位
     3). 必须小于等于12位
     4). 必须是英文、数字或下划线组成
    */
  validatePwd = (rule, value, callback) => {
    console.log('validatePwd()', rule, value)
    if(!value) {
      callback('密码必须输入')
    } else if (value.length<4) {
      callback('密码长度不能小于4位')
    } else if (value.length>12) {
      callback('密码长度不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback() // 验证通过
    }
    // callback('xxxx') // 验证失败, 并指定提示的文本
  }  


    render() {
      // 占据宽高样式配置项
      const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 8,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };

      
      //表单校验成功的回调 
      const onFinish = values => {
        if (values.username === 'admin'&& values.password === '123456') {
          // alert('登录成功')
          // 跳转到管理界面 (不需要再回退回到登陆)
          this.props.history.replace('/')
        } else {
          alert('密码错误。老哥')
        }
        console.log('Success:', values);
      };

      //表单校验失败的回调 
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      // 得到具强大功能的form对象
      // 用于多功能校验
      // const form = this.props.form
      // const { getFieldDecorator } = form;


      return (
        <div className='login'>
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                    required: true,
                    message: '用户名不能为空',
                },
                {
                    max: 20,
                    message: '最长20位!',
                },
                {
                    min: 5,
                    message: '至少5位!!',
                },                                {
                    pattern: /^[A-Za-z\d_]+$/,
                    message: '不能包含字母数字下划线字符!',
                },
            ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                    validator: (_, value) =>{
                      console.log("111111")
                      console.log(_)
                      console.log(value)
                    if(value && value.length >= 6 && value.length<=10) {
                        return Promise.resolve()
                    }else{
                        return Promise.reject('密码长度必须是6~10位')
                    }
                  }
                }
            ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item  name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item> */}

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }

  // 包装Form组件生成一个新的组件: Form(Login)
  // 新组件会向Form组件传递一个强大的对象属性: form
  // const WrapLogin = Form.create()(Login)
  // export default WrapLogin

  export default Login



