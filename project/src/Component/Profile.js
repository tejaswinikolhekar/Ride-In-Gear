import React from "react";
import {  Button} from 'reactstrap';
class Profile extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            customer:[]
        }
    }
    componentDidMount=()=>{
        fetch('http://localhost:8080/getcustomerbyid/'+JSON.parse(localStorage.getItem("loggedinuser")).cid,
        {
            method:'GET',
            headers:{
                'Content_Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{this.setState({customer:data});
    });
    }
    render(){
        return(
            <div>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Email ID</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Contact No</th>
                        <th>Licence No</th>
                    </tr>
                </thead>
                {this.state.customer.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{JSON.parse(localStorage.getItem("loggedinuser")).loginid.uname}</td>
                        <td>{obj.fname}</td>
                        <td>{obj.lname}</td>
                        <td>{obj.email}</td>
                        <td>{obj.address}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.contactno}</td>
                        <td>{obj.licenceno}</td>
                       {/* <td><Button onClick={this.deleteData(obj.cid)}>Update</Button></td>*/}
                        </tr>
                        </tbody>
                        )
                    }
                )
        }
            </table>
            </div>
        )
    }
}
export default Profile;