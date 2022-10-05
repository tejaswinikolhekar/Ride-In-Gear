
import React from "react";

import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Home from "./Home";
import NavbarHome from "./NavbarHome";
import Service from "./Service";

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <NavbarHome />
                <Home />
                <Service />
                <Gallery />
                <About />
                <Footer />

                
            </div>

        );
    }
     

}
export default HomePage;
