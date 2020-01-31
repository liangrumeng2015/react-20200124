import React, { useState } from 'react'
import Head from 'next/head'
import Axios from 'axios'
import serviceApi from '../config/httpURI'
import {Row,Col,List,Icon,Breadcrumb} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const myList = (data) => {
  const [mylist,setMyList] = useState(data.module)
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
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={
              item=>{
                return(
                  <List.Item>
                    <div className="list-title">{item.title}</div>
                    <div className="list-icon">
                      <span><Icon type="calendar" />{item.addTime}</span>
                      <span><Icon type="folder" />视频教程</span>
                      <span><Icon type="fire" />{item.viewCount}人</span>
                    </div>
                    <div className="list-context">{item.articleContent}</div>
                  </List.Item>
                )
              }
            }
          />
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}
myList.getInitialProps = async(context)=>{
  const promise = new Promise(resolve=>{
    var typeId = context.query.id;
    var url = serviceApi.getListById + typeId;
    Axios(url).then(res=>{
      resolve(res.data)
    })
  })
  return await promise;
}

export default myList
