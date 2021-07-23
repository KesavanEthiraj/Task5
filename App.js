import React, { Component } from 'react'
//import Counter from "./Counter.js";
//import Arrow from './arrow.js';
//import Application from './Application.js';
// import Usestate from './usestate'
// import Task5 from './task5/task6fin';
// import './task5/style.css';
import Pricing from './pricing'


 class App extends Component {
     constructor(){
         super()
         this.state={
             show:true
         }
     }
 setshow(){
     this.setState({
         show: !this.state.show
     })
 }
    render() {
        return (
            <div className="class1">
                {//<button onClick={()=>this.setshow()}> set show</button>
                //{this.state.show ? <Counter/>:<></>}
                }
                <Pricing />
            </div>
        )
    }
}

export default App

