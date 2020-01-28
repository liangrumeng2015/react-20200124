import React,{useState,createContext,useContext} from 'react';

function AbcChild(){
    const count = useContext(CountContext)
    return(
        <div>
            子组件  {count}
        </div>
    )
}

const CountContext = createContext();

function Abc(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>数量:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <CountContext.Provider value={count}>
                <AbcChild/>
            </CountContext.Provider>
        </div>
    )
}
export default Abc;