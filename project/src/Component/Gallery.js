import React from "react";


class Gallery extends React.Component{

    render(props){
        const boxCStyle = {display: 'flex', flexwrap: 'wrap', gap:'1.5rem'}
        const boxStyle = {overflow: 'hidden',boxshadow: '0 1rem 2rem rgba(0,0,0,.1)',border:'1rem solid #fff', borderradius: '.5rem', flex:'1 1 30rem', height: '25rem', position: 'relative', }
        const imgStyle = {height: '100%', width:'100%', objectfit: 'cover'}
        const spanStyle = {fontsize: '3.5rem', background:'rgba(255, 165, 0,.2)', color:'var(--orange)', borderradius: '.5rem', padding:'.2rem 1rem'}
        
        return(
            <div>
                <h1 class="heading" className="text-center text-md-right" style={{ padding:'2.5rem 0'}} id="gallery">
                    <span style={spanStyle}>G</span> &nbsp;
                    <span style={spanStyle}>A</span> &nbsp;
                    <span style={spanStyle}>L</span> &nbsp;
                    <span style={spanStyle}>L</span> &nbsp;
                    <span style={spanStyle}>E</span> &nbsp;
                    <span style={spanStyle}>R</span> &nbsp;
                    <span style={spanStyle}>Y</span>
                </h1>
                <ul>
                    <div class="box-container" style={boxCStyle}>
                    <li style={{listStyle:'none'}}>
                    <div class="box" style={boxStyle}>
                        <img src="/img/index1.png" alt="" style={imgStyle} />
                    </div>
                    <div class="box" hover style={boxStyle}>
                        <img src="/img/index2.jpg" alt="" style={imgStyle} />
                       
                    </div>
                    <div class="box" hover style={boxStyle}>
                        <img src="/img/index3.png" alt="" style={imgStyle} />
                        
                    </div>
                    </li>
                    <li style={{listStyle:'none'}}>
                    <div class="box" hover style={boxStyle}>
                        <img src="/img/index4.png" alt="" style={imgStyle} />
                        
                    </div>
                    <div class="box" hover style={boxStyle}>
                        <img src="/img/index5.jpg" alt="" style={imgStyle} />
                        
                    </div>
                    <div class="box" hover style={boxStyle} >
                        <img src="/img/index6.png" alt="" style={imgStyle} />  
                    </div>
                    </li>
                    </div>
                </ul>
            </div>

        );

    }
}

export default Gallery;
