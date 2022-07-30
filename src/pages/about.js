import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./homeinfo";
import Form from "../components/ContactElement";
const Info = () => {
  return (
    <div className="container">
      <h1 id='welcome-disp'>
       Welcome!
      </h1>
      <br/>
      <Main/>
        <br/>
          <h2 id="contact-disp">Enter contact information below.</h2>
        <br/>
        <Form/>
    </div>
  );
};
  
export default Info;