import React from 'react';
import Adminprofile from './Adminprofile';
import Footer from './Footer';
import Header from './Header';

class Adminhome extends React.Component{
    render(){
        return(
            <div  style={{height: '100%', width: '100%'}} >
                <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                    <Header />
                </div>
                <div id="admin" style={{position: 'absolute', top: '80px', bottom: '100px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                    <Adminprofile />
                </div>
                <div  style={{position: 'absolute', bottom: '0px', height: '100px', left: '0px',  right: '0px'}}>
                    <Footer />
                </div>
            </div>


        );
    }
     

}
export default Adminhome;