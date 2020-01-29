import React, { useState } from 'react'
import Head from 'next/head'
import {Row,Col,List,Icon} from 'antd'
import Axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'
const Home = (list) => {
  const [mylist,setMyList] = useState(list.module)
  return(
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={24} lg={18} xl={14}>
          <div>
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
                      <span><Icon type="fire" />{item.viewCount}</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>
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

Home.getInitialProps = async() =>{
  const promise = new Promise((resolve)=>{
    var url = 'http://127.0.0.1:7001/default/getArticleList'
    Axios(url).then(res=>{
      resolve(res.data)
    })
  })
  return promise
}

export default Home
