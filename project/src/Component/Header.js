import React from "react";
import {CardBody, Card} from "reactstrap";

function Header () {
    return(
        <div>
            
            <Card >
            
                <CardBody>
               <h1 style={{fontFamily: 'Rockwell'}} className="text-left my-0" > <img style={{paddingRight: "0.2%"}} height="3%" width="3%"  src="/img/logo.png"/> Ride in Gear  
               </h1>
                </CardBody>
                
            </Card>
            
        </div>
    );
}
export default Header;