import React, { useState } from 'react'
import Head from 'next/head'
import Axios from 'axios';
import serviceApi from '../config/httpURI'
import {Row,Col,List,Icon,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import marked from 'marked';
import highlightjs from 'highlight.js';
import Tocify from '../components/tocify.tsx'
import 'highlight.js/styles/monokai-sublime.css'
import '../public/style/pages/Detail.css'

const Detail = (data) => {
  const tocify = new Tocify();
  const render = new marked.Renderer();
  // ### abc
  render.heading = function(text,level,raw){
    const anchor = tocify.add(text,level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer:render,   // 必填，渲染自定义格式
    gfm:true,   // 启动类似github的marked
    pedantic:false,    // 容错机制
    sanitize:false,    // 原始输出，忽略html
    tables:true,       // 支持table，gfm必须为true
    breaks:false,      // 支持换行符，gfm必须为true
    smartLists:true,   // 优化列表
    smartypants:false,
    highlight:function (code){    // 代码高亮
      return highlightjs.highlightAuto(code).value;
    }
  })
  let html = marked(data[0].articleContent);



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
              <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
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
    let url = serviceApi.getArticleById+_id;
    Axios(url).then(res=>{
      resolve(res.data.module)
    }).catch(err=>{
      console.log(err);
    })
  })
  return await promise;
}

export default Detail
