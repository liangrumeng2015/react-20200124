import React,{useState} from 'react';
import {Route} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AddArticle from './Index/AddArticle'
import ArticleList from './Index/ArticleList'
import '../static/style/adminIndex.css'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
    const [collapsed,setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };
    const currentKey = (current)=>{
      if(current.key == 'addArticle'){  // 添加文章
        props.history.push('/index/add')
      }else if(current.key == 'articleList'){
        props.history.push('/index/list')
      }
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={currentKey}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>工作台</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>添加文章</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key="addArticle">添加文章</Menu.Item>
              <Menu.Item key="articleList">文章列表</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>留言管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <div>
                <Route path="/index" exact  component={AddArticle}  />
                <Route path="/index/add" exact component={AddArticle}  />
                <Route path="/index/list" exact component={ArticleList}  />
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>柠檬鸭 ©2020 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
export default AdminIndex;