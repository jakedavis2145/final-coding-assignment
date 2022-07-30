import React from "react";
import "../App.css";
import Header from "./navbar";
import App from "./App";


export default class Page extends React.Component{
    render(){
        return(
            <div id="navbar" className="container">
                <Header />
                <br/>
                <div id="content" className="col-sm">
                <br/>
                 <App />
                 </div>
            </div>
         
         
   ) }
}