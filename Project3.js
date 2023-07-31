import React, { Component } from "react";
import Phone from "./about";
class App extends Component{
  constructor(){
    super();
    this.state={
      data :[
        {
          "name":"Harihaarsudhan : MP"
        },
        {
          "name":"Sudhan : Hhs"
        },
        {
          "name":"Hari: Brilliant"
        }
      ]
    };
  }

  render(){
    return(
      <div>
        {/* '<h1>Happy Learning I am {this.state.name} fruit from {this.state.country} and my color is {this.state.Color}</h1> */}
        <Fruits/>
        <Fruits1/>
        <ul>
          {this.state.data.map((item)=> <List data = {item}/>)}
        </ul>
        <Phone />
      </div>
    );
  }
}

class Fruits extends Component{
  render(){
    return(
      <div>
        <h2>Welcome to Buddy Club</h2>
      </div>
    )
  }
  }

  class Fruits1 extends Component{
    render(){
      return(
        <div>
          <h2>It's about my friends</h2>
        </div>
      )
    }
    }

class List extends Component{
  render(){
    return(
      <div>
        <ul>
          <li><p>{this.props.data.name}</p></li>
        </ul>
      </div>
    )
  }
}



export default App;