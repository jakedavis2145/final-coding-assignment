import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Main extends React.Component{
    render(){
    return (
            <div id="Main" class='container'>
                <div className="row">
                    <div className="col-sm">
                        <h3><u>Sample Header</u></h3>
                    </div>
                    <div id="header" className="col-sm">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                             nisi ut aliquip ex ea commodo consequat. 
                             Duis aute irure dolor in 
                             reprehenderit in voluptate velit esse cillum dolore 
                             eu fugiat nulla pariatur. 
                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                            </p>
             </div>
                </div>  
            <br/>
            <div className="row">
                  <div className="col-sm">
                     <h3><u>Sample Header 2</u></h3>
                      </div>
                       <div id="header" className="col-sm">
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                              Augue mauris augue neque gravida in. Fringilla urna porttitor
                               rhoncus 
                              dolor purus. 
                              Odio aenean sed adipiscing diam donec adipiscing. In tellus integer 
                              feugiat scelerisque varius morbi enim nunc. Nunc mi ipsum 
                              faucibus vitae 
                              aliquet nec 
                              ullamcorper. Feugiat nibh sed pulvinar proin. Dictum fusce ut 
                              placerat orci 
                              nulla
                               pellentesque dignissim enim sit. Bibendum ut tristique
                                et egestas quis ipsum.
                               Elementum facilisis leo vel fringilla est.  
                            </p>
             </div>
        </div>
            <br/>    
            <div className="row">
                <div className="col-sm">
                    <h3><u>Sample Picture</u></h3>
                </div>
                <div id="header" className="col-sm">
                    <img id="pictureOne" src="https://thumbs.dreamstime.com/b/
                    stock-market-
                    graph-forex-trading-chart-
                    business-financial-concepts-data-bullish-point-trend-vector-
                    illustration-150125253.jpg">
                    </img>
                </div>
            </div>

            <br/>

    </div>
      
    )
  }
}