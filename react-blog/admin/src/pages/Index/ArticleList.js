import React,{useState,useEffect} from 'react';
import serviceApi from '../../config/httpURI'
import reqAxios from '../../config/Axios'
import {Table,Button} from 'antd'

 function ArticleList(){
    const [list,setList] = useState([]);
    useEffect(()=>{
        getArticleList();
    },[])
    const getArticleList = async() =>{
        const result = await reqAxios(serviceApi.getArticleList,'post');
        setList(result)
    }

    const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '类别',
        dataIndex: 'typeId',
        key: 'type',
    },
    {
        title: '发布时间',
        dataIndex: 'addTime',
        key: 'addTime',
    },
    {
        title: '浏览量',
        dataIndex: 'viewCount',
        key: 'viewCount',
    },
    {
        title: '操作',
        dataIndex: '',
        key: 'operation',
        render: () => 
            <div>
                <Button type="primary">修改</Button>
                &nbsp;
                <Button type="primary">删除</Button>
            </div>
        ,
        },
    ];
    return(
        <div>
                <Table 
                    bordered
                    dataSource={list} 
                    columns={columns} 
                />
        </div>
    )
 }

 export default ArticleList;
// getArticleList