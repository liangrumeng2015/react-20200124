import React,{useState,useEffect} from 'react';
import marked from 'marked'
import '../../static/style/addArticle.css'
import {Row,Col,Input,Select,Button,DatePicker, message} from 'antd'
import serviceApi from '../../config/httpURI'
import reqAxios from '../../config/Axios'
const { Option } = Select;
const { TextArea } = Input;


function AddArticle(props){
   const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
   const [articleTitle,setArticleTitle] = useState('')   //文章标题
   const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
   const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
   const [introducemd,setIntroducemd] = useState('')            //简介的markdown内容
   const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
   const [showDate,setShowDate] = useState()   //发布日期
   const [updateDate,setUpdateDate] = useState() //修改日志的日期
   const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
   const [selectedType,setSelectType] = useState('选择文章类型') //选择的文章类别
   const [viewCount,setViewCount] = useState('999');   // 文章阅读次数

   useEffect(()=>{
    getTypeInfo()
   },[])

   marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  }); 
  // 编辑文章
  const changeContent = (e) =>{
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }
  // 编辑简介
  const changeIntroduce = (e) =>{
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    setIntroducehtml(html)
  }
  // 获取文章类型
  const getTypeInfo = async() =>{
    const result = await reqAxios(serviceApi.getTypeInfo,'get',{},true)
    if(result.success){
        setTypeInfo(result.module)
    }else{
        if(result.msg === 'no-login'){
            props.history.push('/')
            localStorage.removeItem('openId')
        }
    }
  }
  // 发布文章
  const saveAndRelease = async()=>{
      if(!articleTitle){
          message.error('文章标题不能为空')
          return false;
      }else if(selectedType === '选择文章类型'){
        message.error('请选择文章类型')
        return false;
      }else if(!articleContent){
        message.error('文章内容不能为空')
        return false;
      }else if(!introducemd){
        message.error('文章简介不能为空')
        return false;
      }else if(!showDate){
        message.error('请选择文章发布时间')
        return false;
      }
      var data = {
        title:articleTitle,
        articleContent:articleContent,
        typeId:articleId,
        introduce:introducemd,
        addTime:showDate,
        viewCount:viewCount
      }
      if(articleId == 0){   // 0增加   
        const result = await reqAxios(serviceApi.saveAndRelease,'post',data,true);
        console.log('添加文章接口返回',result)
      }else if(articleId == 1){  // 1修改
        const result = await reqAxios(serviceApi.updateArticle,'post',data,true);
        console.log('修改文章接口返回',result);
      }
      message.success('成功')
  }

    return(
        <>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                onChange={e=>{
                                    setArticleTitle(e.target.value)
                                }}
                                placeholder="文章标题"
                                size="large"
                            />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue={selectedType} size="large" onChange={(value)=>{
                                setSelectType(value)}}>
                                {
                                    typeInfo.map((item,idx)=>{
                                        return(
                                            <Option key={idx} value={item.id}>{item.typeName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                            rows={35} 
                            className="markdown-content"
                            placeholder="文章内容"
                            onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html" dangerouslySetInnerHTML={{__html:markdownContent}}></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Col span={24}>
                        <Button type="primary" size="large" >暂存文章</Button>&nbsp;
                        <Button type="primary" size="large" onClick={saveAndRelease}>发布文章</Button>
                    </Col>
                    <Col span={24}>
                        <br/>
                        <TextArea
                            rows={4}
                            placeholder="文章简介"
                            onChange={changeIntroduce}
                        />
                        <br/>
                        <br/>
                        <div  className="introduce-html" dangerouslySetInnerHTML={{__html:introducehtml}}></div>
                    </Col>
                    <Col span={12}>
                        <div className="date-select">
                            <DatePicker 
                            onChange={(date,dataString)=>{
                                setShowDate(dataString)
                            }}
                            placeholder="发布日期" />
                        </div>
                    </Col>
                </Col>
            </Row>
        </>
    )
}
export default AddArticle;