
import React from "react";
import {Button} from 'reactstrap';
class Getowner extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            owner:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getowner")
        .then(resp=>resp.json())
        .then(data=>{this.setState({owner:data});
        //alert(this.state.customer.length)
    });
    }
    deleteDataveh = (oid) => {
        if(window.confirm("Are you sure?")){
            fetch('http://localhost:8080/deleteowner/'+oid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                owner: this.state.owner.filter(owner => owner.oid !== oid)
            });
        }
    }
    render(){
        const length=this.state.owner.length;
        let comp;
        if(length==0)
        {
            comp=<p>Owner data not found...................</p>
        }
        else{
            comp=<div>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact Number</th>
                        <th>Adhar Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.owner.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{obj.oid}</td>
                        <td>{obj.fname}</td>
                        <td>{obj.lname}</td>
                        <td>{obj.email}</td>
                        <td>{obj.address}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.contactno}</td>
                        <td>{obj.adharno}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.oid)}>DELETE</Button></td>
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
export default Getowner;