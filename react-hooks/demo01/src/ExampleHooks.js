import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('Index页面的--来了---');
        return ()=>{
            console.log('Index页面的--走了---');
        }
    },[])
    return(
        <div>
            index页面
        </div>
    )
}
function List(){
    useEffect(()=>{
        console.log('list页面----来了---')
        return ()=>{
            console.log('list页面----走了---')
        }
    },[])
    return(
        <div>
            List页面
        </div>
    )
}

function Example (){
    const [count,setCount] = useState(0);
    useEffect(() =>{
        console.log(`effect ----the count is ${count}`)
    })
    return(
        <>
            <p>the num is {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me </button>
            <Router>
            <ul>
                <li><Link to="/" >首页</Link></li>
                <li><Link to="/list" >列表页</Link></li>
                <Route path="/" exact component={Index} />
                <Route path="/list" component={List} />
            </ul>
            </Router>
        </>
    )
}
export default Example;