import React from "react";
import ReactDOM from "react-dom";
import bookshop from'./bookshop.jpeg'
class Home extends React.Component{
       render(){
        return(
           <><h1>Welcome to Paradise of Books</h1><img src={bookshop}></img></>
        );
            
}
}
export default Home;