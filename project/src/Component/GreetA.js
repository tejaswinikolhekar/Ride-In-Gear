import React from 'react';

export default class GreetA extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <h1 class="display-3" style={{fontFamily: 'cursive', padding:'15%', textAlign:'center'}}>Welcome Admin </h1>
            </div>
            )
    }
}
                