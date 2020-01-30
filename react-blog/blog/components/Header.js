import React,{useState,useEffect} from 'react';
import {Row,Col,Menu,Icon} from 'antd';
import Router from 'next/router';
import Link from 'next/link';
import Axios from 'axios'
import serviceApi from '../config/httpURI'
import '../public/style/component/Header.css'

const Header = () => {
    const [navArray,setNavArray] = useState([])
    console.log('00000',navArray)
    useEffect(()=>{
        console.log('11111')
        let fetchData = async()=>{
            let result = await Axios.post(serviceApi.getTypeInfo).then(
                res=>{
                    console.log(res.data.module)
                    return res.data.module
                }
            )
            setNavArray(result)
        }
        fetchData()
    },[])
    return(
        <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">柠檬鸭</span>
                <span className="header-txt">专注于前端开发</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                
                <Menu mode="horizontal">
                    {
                        navArray.map(item=>(
                            <Menu.Item key={item._id}>
                                <Icon type={item.iconPath} />
                                {item.typeName}
                            </Menu.Item>
                            )
                        )
                    }
                </Menu>
            </Col>
        </Row>
    </div>
    )
}
export default Header;
