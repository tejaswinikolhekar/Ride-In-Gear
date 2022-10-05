import React from "react";
import {  Button} from 'reactstrap';

class Getvehicle extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            vehicle:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getvehbyoid/"+JSON.parse(localStorage.getItem("loggedinuser")).oid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({vehicle:data});
        });
    }
    deleteDataveh = (vid) => {
        if(window.confirm("Are you sure?")){
            fetch('http://localhost:8080/deleteveh/'+vid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                vehicle: this.state.vehicle.filter(vehicle => vehicle.vid !== vid)
            });
        }
    }
    render(){
        const length=this.state.vehicle.length;
        let comp;
        if(length==0)
        {
            comp=<p>Vehicle not found</p>
        }
        else{
            comp=<div>
            <table class="table table-hover">
            <thead>
                    <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Type</th>
                        <th>City</th>
                        <th>Category</th>
                        <th>Insurence</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.vehicle.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{obj.vid}</td>
                        <td>{obj.vno}</td>
                        <td>{obj.vname}</td>
                        <td>{obj.vtype}</td>
                        <td>{obj.city}</td>
                        <td>{obj.category}</td>
                        <td>{obj.insurence}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.vid)}>DELETE</Button></td>
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
export default Getvehicle;