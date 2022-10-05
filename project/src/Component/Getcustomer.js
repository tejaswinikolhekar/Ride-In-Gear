
import React from "react";
import {Button} from 'reactstrap';
class Getcustomer extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            customer:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getcustomer")
        .then(resp=>resp.json())
        .then(data=>{this.setState({customer:data});
        //alert(this.state.customer.length)
    });
    }
    deleteDataveh = (cid) => {
        if(window.confirm("Are you sure?")){
            fetch('http://localhost:8080/deletecust/'+cid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                customer: this.state.customer.filter(customer => customer.cid !== cid)
            });
        }
    }
    render(){
        const length=this.state.customer.length;
        let comp;
        if(length==0)
        {
            comp=<p>Customer data not found...................</p>
        }
        else{
            comp=<div>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact Number</th>
                        <th>Licence Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.customer.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{obj.cid}</td>
                        <td>{obj.fname}</td>
                        <td>{obj.lname}</td>
                        <td>{obj.email}</td>
                        <td>{obj.address}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.contactno}</td>
                        <td>{obj.licenceno}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.cid)}>DELETE</Button></td>
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
export default Getcustomer;