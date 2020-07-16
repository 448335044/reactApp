import React, {Component} from 'react'
import { Table} from 'antd';
import {Link} from 'react-router-dom'
// 引入子组件卡片
import MyCard from '../../componments/one/table-card'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="http://www.baidu.com">{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
      align: 'right',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        // render: () => <Link to="/detail">Delete</Link>,

        //路由传参1-动态路由传参(需要手动解析-不推荐)
        // render: () => <Link to='/detail?id=8'>Delete</Link>,
        // render: () => <Link to={{pathname: '/detail', search:`id=8`}}>Delete</Link>,
        
    
        //路由传参2-隐式路由传参(推荐使用，比较安全，获取传递参数都比较方便)
        // render: () => <Link to={{pathname:'/detail', state: {id:9}}}>Delete</Link>,
        
        render: (params) => <Link to={{pathname:'/detail', state: {params}}}>Delete</Link>,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

export default class One extends Component {
    render () {
        return (
            <div>
                {/* 上面表格 */}
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => 'HeaderTABLE'}
                    
                />
                {/* 下面用卡片子组件显示表格数据 */}
                <MyCard></MyCard>

            </div>
        )
    }
}