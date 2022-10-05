import React from 'react';
import Footer from './Footer';
import Header from './Header';
import NavbarHome from './NavbarHome';
import Oregistration from './Oregistration';

class Osignup extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <NavbarHome />
                <Oregistration />
                <Footer />
            </div>

        );
    }
     

}
export default Osignup;