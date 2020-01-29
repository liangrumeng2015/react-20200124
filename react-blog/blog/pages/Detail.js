import React, { useState } from 'react'
import Head from 'next/head'
import {Row,Col,List,Icon,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkDown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../public/style/pages/Detail.css'

const Detail = () => {
  let markdown='# p01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

  const article = `# 1.Markdown-Navbar Demo
 
## 2.Chicken Chicken
 
Chicken Chicken Chicken Chicken Chicken.
 
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
* Chicken Chicken Chicken Chicken Chicken.
 
### 3.Chicken Chicken Chicken
 
Chicken Chicken Chicken Chicken Chicken.
 
#### 4.Chicken Chicken Chicken Chicken
 
Chicken Chicken Chicken Chicken Chicken Chicken.`;
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


export default Detail
