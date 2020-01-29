import React, { useState } from 'react'
import Head from 'next/head'
import Axios from 'axios';
import {Row,Col,List,Icon,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkDown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../public/style/pages/Detail.css'

const Detail = (data) => {
  const {markdown} = data

  return(
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={24} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/"> 首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-blog开发
              </div>
              <div className="list-icon center">
                <span><Icon type="calendar" />2020-01-29</span>
                <span><Icon type="folder" />视频教程</span>
                <span><Icon type="fire" />123456人</span>
              </div>
              <div className="detailed-content">
                <ReactMarkDown 
                  source={markdown}
                  escapeHtml={false}

                />
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

Detail.getInitialProps = async(context) =>{
  const promise = new Promise((resolve)=>{

    let _id = context.query.id;
    let url = 'http://127.0.0.1:7001/default/getArticleById/'+_id;
    Axios(url).then(res=>{
      console.log('detail接口返回',res.data)
      resolve(res.data.module[0])
    }).catch(err=>{
      console.log(err);
    })
  })
  return await promise;
}

export default Detail
