import React from 'react'
export default class Greet extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h1 class="display-3" style={{fontFamily: 'Rockwell', padding:'15%', textAlign:'center'}}>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname} </h1>
            </div>
            );
    }
}
                