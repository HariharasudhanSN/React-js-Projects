// import React from 'react';
// import App from './App';
// import Fruit from './fruit';

// ReactDOM.render(<App/>, document.getElementById("root"));
// ReactDOM.render(<Fruit/>, document.getElementById("root"));

//import ReactDOM from 'react-dom';
//import App from "./App";
/*import ReactDOM from "react-dom";
import React from "react";
import './style.css';
import styles  from './demo.module.css';
import  img1 from './img1.jpg';
import  img2 from './60marriage.jpg';
class Reactstyle extends React.Component{
    render()
        {
          return(
                <div>
                    <h1>Hi All</h1>
                   <h2 className={styles.heading} >Hi Hari</h2>
                   <h5>Have a HAppy Day</h5>
                   <img src={img1} alt="logo" width="200" height="200"></img>
                   <img src={img2} alt="logo1" width="550" height="400"></img>
                </div> 
            );
        }
    
}
ReactDOM.render(<Reactstyle/>,document.getElementById('root'));*/

/*import React from "react";
import ReactDOM from "react-dom";
       var n=() =>
       {
        var a=5;
        if(a==5)
        {
            a=10;
        }
        document.getElementById('root').innerHTML=a;
       }        
       n();*/
 /*var a=(x) =>
       {
       var a=5;
       var b=10;
       var c=a+b+x;
       document.getElementById('root').innerHTML=c;
    }
    a(30);*/

    /*class demo{
        methodone()
        {
            var a=5;
            var b=10;
            var c=a+b;
            document.getElementById('root').innerHTML=c;
        }
    }
    var mydemo=new demo();
    mydemo.methodone();*/

   /* import React from 'react';
    import ReactDOM from 'react-dom';
     methodone();{
        const a=33;
        var b;
        if(Math.floor(a/11)===0){
            b=true;
        }
        else{
            b=false;
        }
     }
     methodone();*/
//divisibility rule program//

/*class demo{
    method(n)
    {
        var n,re,s=0;
        while(n){
            re=n%10;
            s=s+re;
            n=Math.floor(n/10);
        }
        document.getElementById('root').innerHTML=s;
    }
}
var obj=new demo();
obj.method(1234)*/

/*import React from "react";
import ReactDOM from "react-dom";
class Reactform extends React.Component{
    constructor(){
        super();
        this.state={username:"",age:null,errmsg:""};
    
    }
    uservalue=(event)=>
    {
        let n:Event.target.value;
        let v:event.target.value;
        let err="";
        if(n==="age"){
            if(v!==""&& !Number(v))
            {
                err=<strong>invalid,age must be number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});//again when u change it to number
    }
    fromsubmit=(Event)=>{
        Event.preventDefault(); 
    }
render()
{
    return(
        <form>
            <h1>Hello this is {this.state.username}</h1>
            <h2>Your age {this.state.age}</h2>
            Enter your name:<input type="text" name="username" onChange={this.uservalue}/>
            Enter your age:<input type="text"age="age" onChange={this.uservalue}/>{this.state.errmsg}
            </form>
    )
}
}
ReactDOM.render(<Reactform/>,document.getElementById('root'))*/


/*import React from 'react'
import ReactDOM from 'react-dom'
class Form extends React.Component {
  constructor() {
    super()
    this.state = {username: '', age: null, errmsg: ''}
  }
  uservalue = (event) => {
    let n = event.target.name
    let v = event.target.value
    let err = ''
    if (n === 'age') {
      if (v != '' && !Number(v)) {
        err = <strong>invalid,age must be number</strong>
      }
    }
    this.setState({errmsg: err})
    this.setState({[n]: v})
  }
  render() {
    return (
      <form style={{color: 'purple', textAlign: 'center'}}>
        <h1>Hello this is {this.state.username}</h1>
        <h2>Your age {this.state.age}</h2>
        <h3></h3>
        <div>
          Enter Your Name:
          <input type="text" name="username" onChange={this.uservalue} />
        </div>{' '}
        <br />
        <div>
          Enter Your Age:
          <input type="text" name="age" onChange={this.uservalue} />
          <br />
          {this.state.errmsg}
        </div>
      </form>
    )
    formsumbit = (event)=>
    {
      event.preventdefault()
    }
  }

}

ReactDOM.render(<Form />, document.getElementById('root'))*/

/*import React,{ useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
function ReactHooks(){
    const[count,updatecount]=useState(0);
    useEffect(()=>{
        alert("check use effect");
    })
   return(
    <div>
        <p>u clicked above button {count} times</p>
        <button onClick={()=>updatecount(count+1)}>click me</button>
    </div>
   )
}
ReactDOM.render(<ReactHooks />,document.getElementById('root'));*/

/*import React from "react";
import ReactDOM from "react-dom";
class Rowcreation extends React.Component{
    render(){
        return(
            <React.Fragment>
               <td>hello</td>
               <td>hello</td>
               <p>Welcome</p>
               </React.Fragment>
        )
    }
}
ReactDOM.render(<Rowcreation/>,document.getElementById('root'))*/


/*import ReactDOM from 'react-dom/client';

import {BrowserRouter as Router, Route,Routers,link,NavLink,swith} from 'react-router-dom'
import Home from './home';
import about from './about';
import joinus from './joinus';
const routing = (
  <Router>
    <div>
      <h1>hello</h1>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/" components={about}/>
      <Route path="/" components={joinus}/>
      </Router>
    </div>
  </Router>
)
const a = ReactDOM.createRoot(document.getElementById('root'));
a.render(routing)*/

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home';
import Phone from './about';
import Join from './joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/about" element={<about/>} />
                <Route path="/joinus" element={<join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
