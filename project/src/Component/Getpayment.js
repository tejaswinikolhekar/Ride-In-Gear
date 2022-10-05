
import React from "react";
import {  Button} from 'reactstrap';
class Getpayment extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            payment:[]
        }
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/getpay")
        .then(resp=>resp.json())
        .then(data=>{this.setState({payment:data});
       });
    }
    deleteDataveh = (tid) => {
        alert(tid);
        if(window.confirm("Are you sure?")){
           /* axios.delete("http://localhost:8080/deletepay/"+tid)
            window.location.reload();*/
            fetch('http://localhost:8080/deletepay/'+tid,
            {
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'                     
                }
            })
            .then(console.log("Deleted"))
            .catch(err=>console.log("error"))
            this.setState({
                payment: this.state.payment.filter(payment => payment.tid !== tid)
            });
        }
    }
    render(){
        const length=this.state.payment.length;
        let comp;
        if(length==0)
        {
            comp=<p>Payment Data not found.............</p>
        }
        else{
            comp=<div>
            <table className="table table-striped">
            <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Total amount</th>
                        <th>Payment Mode</th>
                        <th>Transaction Date and Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {this.state.payment.map(
                    obj=>{
                        return(
                        <tbody>
                        <tr>
                        <td>{obj.tid}</td>
                        <td>{obj.tamt}</td>
                        <td>{obj.mode}</td>
                        <td>{obj.datetime}</td>
                        <td><Button color="danger" onClick={()=>this.deleteDataveh(obj.tid)}>DELETE</Button></td>
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
export default Getpayment;