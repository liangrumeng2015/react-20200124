import React, { useState } from 'react';

function ExampleHooks02(){
    const [age,setAge] = useState(18);
    const [sex,setSex] = useState('女');
    const [work,setWork] = useState('程序员');
    return(
        <div>
            <p>年龄：{age}</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
            
        </div>
    )
}
export default ExampleHooks02
