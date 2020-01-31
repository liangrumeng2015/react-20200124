import React from 'react';
import {Avatar,Divider} from 'antd'
import '../public/style/component/Author.css'
const Author = () =>{
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://q4.qlogo.cn/g?b=qq&nk=2018753540&s=100" />
                <div className="author-introduction">
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                    <Divider>社交账号</Divider>
                    <Avatar size={28} icon="github" className="account" />
                    <Avatar size={28} icon="qq" className="account" />
                    <Avatar size={28} icon="wechat" className="account" />
                </div>
            </div>
        </div>
    )
}
export default Author;