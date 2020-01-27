import React,{Component} from 'react';
import AddMenu from './AddMenu'
class App extends Component{
    render(){
        return(
            <div>
                <AddMenu />
                <ul className="list-li">
                    <li>JavaScript</li>
                    <li>html</li>
                </ul>
            </div>
        )
            // var child1 = React.createElement('li',null,'JavaScript');
            // var child2 = React.createElement('li',null,'html');
            // var root = React.createElement('ul',{className:'list-li'},child1,child2)
    }
}
export default App