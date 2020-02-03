import React,{useState} from 'react';
import serviceApi from '../../config/httpURI'
import reqAxios from '../../config/Axios'
import {Table,Button} from 'antd'

 function ArticleList(){
    const [list,setList] = useState([]);
    
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
        ];

        const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '类别',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '发布时间',
            dataIndex: 'releaseTime',
            key: 'releaseTime',
        },
        {
            title: '集数',
            dataIndex: 'setNum',
            key: 'setNum',
        },
        {
            title: '浏览量',
            dataIndex: 'browerCount',
            key: 'browerCount',
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
                    dataSource={dataSource} 
                    columns={columns} 
                />
        </div>
    )
 }

 export default ArticleList;
