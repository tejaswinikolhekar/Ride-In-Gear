import React from 'react';
import Customerprofile from './Customerprofile';
import Footer from './Footer';
import Header from './Header';

class Customerhome extends React.Component{
    render(){
        return(
            <div style={{height: '100%', width: '100%'}}>
            <div style={{position: 'absolute', top: '0px', left: '0px', height: '80px', right: '0px', overflow: 'hidden'}}>
                    <Header />
                    </div>
                     <div id="customerhome" style={{position: 'absolute', top: '80px', bottom: '120px', left: '0px', right: '0px', overflowY: 'scroll'}}>
                    <Customerprofile />
                    </div>
                    <div style={{position: 'absolute', bottom: '0px', height: '120px', left: '0px',  right: '0px'}}>
                    <Footer />
                    </div>
                    </div>

        );
    }
     

}
export default Customerhome;