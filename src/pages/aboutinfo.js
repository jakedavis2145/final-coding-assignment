import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class AboutPage extends React.Component{
    render(){
        return(
            <div id='aboutPage' className="container">
                        <br/>
                <div className="col-sm">
                    <h3>App Info:</h3>
                </div>
                        <br/>
                    <div id="aboutPara" className="row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in. 
                            Faucibus ornare suspendisse sed nisi. Amet nisl suscipit adipiscing bibendum est ultricies 
                            integer. Hac habitasse platea dictumst quisque. Sollicitudin nibh sit amet commodo nulla 
                            facilisi nullam. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Lectus quam 
                            id leo in vitae. Netus et malesuada fames ac turpis. Sit amet consectetur adipiscing elit 
                            duis tristique. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Eget 
                            nunc scelerisque viverra mauris in. 
                            Et malesuada fames ac turpis egestas integer eget aliquet.</p>
                    </div>
                        <br/>
            </div>
        )
    }
}