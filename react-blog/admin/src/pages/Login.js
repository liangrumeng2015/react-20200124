import React,{useState,useEffect} from 'react';
import {Card,Input,Icon,Button,Spin,message} from 'antd'
import reqAxios from '../config/Axios'
import serviceApi from '../config/httpURI'
import '../static/style/login.css'

function Login(props){
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        
    },[])
    // 登录提交
    const checkLogin = async () =>{
        setIsLoading(true)
        if(!userName){
            messageTip('error','用户名不能为空')
            setTimeout500();
            return false;
        }else if(!password){
            messageTip('error','密码不能为空')
            setTimeout500();
            return false;
        }
        let data = {
            userName,
            password
        }
        const result = await reqAxios(serviceApi.checkLogin,'post',data,true);
        if(result.success){
            messageTip('success',result.msg)
            localStorage.setItem('openId',result.openId)
            props.history.push('/index')
        }else{
            messageTip('error',result.msg)
        }
        setTimeout500();
    }
    // 封装message 方法
    const messageTip = (type,msg) =>{
        if(type === 'success'){
            message.success({
                content:msg,
                duration:.5
            })
        }else if(type === 'error'){
            message.error({
                content:msg,
                duration:.5
            })
        }
    }
    // 封装spin延迟500
    const setTimeout500 = () =>{
        setTimeout(()=>{
            setIsLoading(false)
        },500)
    }
    return(
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="柠檬鸭" bordered={true} style={{width:400}}>
                    <Input 
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;