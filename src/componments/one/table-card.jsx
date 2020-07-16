import React, {Component} from 'react'
import { Card, Col, Row } from 'antd';


export default class Detail extends Component {
    render () {
        return (
            <div style={{padding:20,border:'1px solid #e5e5e5'}}>
            <Row gutter={16}>
              <Col span={8} style={{textAlign:'center'}}>
                <Card title="111" bordered={false}>
                  <div>1111</div>
                  <div>1111</div>
                </Card>
              </Col>
              <Col span={8} style={{textAlign:'center'}}>
                <Card title="222" bordered={false}>
                  <div>222</div>
                  <div>222</div>
                </Card>
              </Col>
              <Col span={8} style={{textAlign:'center'}}>
                <Card title="333" bordered={false}>
                  <div>333</div>
                  <div>333</div>
                </Card>
              </Col>
            </Row>
          </div>
        )
    }
}