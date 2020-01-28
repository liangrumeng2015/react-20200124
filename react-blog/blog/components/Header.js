import React from 'react';
import {Row,Col,Menu,Icon} from 'antd';
import '../public/style/component/Header.css'

const Header = () => {
    return(
        <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10}>
                <span className="header-logo">柠檬鸭</span>
                <span className="header-txt">专注于前端开发</span>
            </Col>
            <Col>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <Icon type="youtube" />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile" />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
    )
}
export default Header;
