import React, { Component } from 'react';
 class Example extends Component{
     constructor(props){
        super();
        this.state={
            count:0
        } 
     }
    addNum = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }
    componentDidMount(){
        console.log(`componentDidMount---the count num is ${this.state.count} `)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate--the count num is ${this.state.count} `)
    }
     render(){
         return(
             <div>
                    <p>this num is {this.state.count}</p>
                    <button onClick={this.addNum}>click me</button>
             </div>
         )
     }
 }
 export default Example;