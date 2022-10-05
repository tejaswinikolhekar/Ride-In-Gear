import React from "react";

class About extends React.Component {
  render(props){
  const spanStyle = {fontsize: '3.5rem', background:'rgba(255, 165, 0,.2)', color:'var(--orange)', borderradius: '.5rem', padding:'.2rem 1rem'}
  return (
    <div>
        <h1 class="heading" className="text-center text-md-right" style={{ padding:'2.5rem 0'}} id="about">
          <span style={spanStyle}>A</span> &nbsp;
          <span style={spanStyle}>B</span> &nbsp;
          <span style={spanStyle}>O</span> &nbsp;
          <span style={spanStyle}>U</span> &nbsp;
          <span style={spanStyle}>T</span> &nbsp;
          <span style={spanStyle}>U</span> &nbsp;
          <span style={spanStyle}>S</span>
        </h1>
        <p sans-serif class="card-body" className="text-center text-md-right"><b>
         Provide all facilities which will benificial for Customer as well as Owner. <br/>
          Searching of vehicle on rent can be easily available for Customer & Owner can register their vehicles. <br/>
         User has to Login through the site for bookings and Registering their vehicles.
        </b>
        </p>
    </div>
  );
}
}
export default About;