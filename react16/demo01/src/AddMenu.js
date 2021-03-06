import React,{Component} from 'react';
/**
 * 增加菜单组件
 */
class AddMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            list:['西红柿','菜花']
        }
    }
    changeInputVal = (e) =>{
        this.setState({
            inputVal:e.target.value
        })
    }
    // 添加
    toAddMenu = () =>{
        // var oldList = this.state.list;
        // var newList = oldList.concat(this.state.inputVal)
        // this.setState({
        //     list:newList,
        //     inputVal:''
        // })

        // 也可直接使用es6中的扩展运算符
        this.setState({
            list:[...this.state.list,this.state.inputVal],
        })
    }
    // 删除当前项
    deleteItem = (idx) =>{
        console.log(idx)
        let list = this.state.list;
        list.splice(idx,1);
        this.setState({
            list
        })
    }
    render(){
        return(
            <>
                <div>
                    <label htmlFor="abc">你好</label>
                    <input id="abc" type="text" placeholder="请输入要添加的菜名" value={this.state.inputVal} onChange={this.changeInputVal} />
                    <button onClick={this.toAddMenu}>增加菜名</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <span dangerouslySetInnerHTML={{__html:item}}></span><button onClick={()=>this.deleteItem(idx)}>删除</button></li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}
export default AddMenu