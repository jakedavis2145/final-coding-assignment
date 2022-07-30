import React from 'react';
import AboutPage from './aboutinfo';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
  
const Contact = () => {
  return (
    <div className='container' >
          <h1 id='about-disp'>More information...</h1>
            <br/>
          <AboutPage/>
    </div>
  );
};
  
export default Contact;