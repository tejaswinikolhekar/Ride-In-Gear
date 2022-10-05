
import React from "react";
import {  Button} from 'reactstrap';


class Getbooking extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            booking:[]
        }
    }
    
 
    componentDidMount = () => {
        fetch("http://localhost:8080/getbooking")
        .then(resp=>resp.json())
        .then(data=>{this.setState({booking:data});
        });
    }
    deleteDataveh = (bid) => {
        if(window.confirm("Are you sure?")){
           /* axios.delete("http://localhost:8080/deletebook/"+bid)
            window.location.reload();*/
           fetch('http://localhost:8080/deletebook/'+bid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
           this.setState({
               booking: this.state.booking.filter(booking => booking.bid !== bid)
           });
        }
    }
    render(){
        
        const length=this.state.booking.length;
        let comp;
        if(length==0)
        {
            comp=<p>Booking data not found............</p>
        }
        else{
            comp=<div>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Date From</th>
                        <th>Date To</th>
                        <th>Destination From</th>
                        <th>Destination To</th>
                        <th>Booking Date and Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.booking.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{obj.bid}</td>
                        <td>{obj.fdate} </td>
                        <td>{obj.tdate} </td>
                        <td>{obj.destto}</td>
                        <td>{obj.destfrom}</td>
                        <td>{obj.datetime}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.bid)}>DELETE</Button></td>
                        </tr>
                        </tbody>
                            )
                        }
                     )

                }
            </table>
            </div>
        }
        return(
            <div>
                {comp}
            </div>
            
            )
    }
}
export default Getbooking;