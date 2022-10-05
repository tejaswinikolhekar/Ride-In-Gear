import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Searchvehicle extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      city:"",
      vtype:"",
      vehicle:[],
      abc:{},
      error:""
    }
  }
  handleChange=(e)=>{
      const nm=e.target.name;
      const val=e.target.value;
      this.setState({[nm]:val});
    }
    submitData = () => {
      const city=this.state.city;
      const vtype=this.state.vtype;
      //alert("http://localhost:8080/searchveh/"+city+"/"+vtype)
          fetch('http://localhost:8080/searchveh/'+city+'/'+vtype,
          {
              method:'GET',
              headers:{
                  'Content-Type': 'application/json'                     
              }
          })
          .then(resp=>resp.json())
          .then(data=>{this.setState({vehicle:data})})
          .then(console.log("Vehicle by city and vtype"))
          .catch(err=>console.log("error"))
          //window.location.href="http://localhost:3000/searchveh"
  }
    gotobooking = (vid) => {
      //alert(vid);
          fetch('http://localhost:8080/getvehbyid/'+vid,
          {
              method:'GET',
              headers:{
                  'Content-Type': 'application/json'                     
              }
          })
          .then(resp=>resp.text())
          .then(data=>{
            const json=JSON.parse(data);
            this.setState({abc:json});
            localStorage.setItem("Bookedvehicle",JSON.stringify(this.state.abc));      
          })
          .catch(err=>console.log("error"));
          //this.props.history.push("/booking");
          window.location.href="http://localhost:3000/savebooking";
  }
    render(props){
      const length=this.state.vehicle.length;
      let comp;
      if(length==0)
      {
          comp=<p class="text-danger">Vehicle not found</p>
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
                      <td><Button color="primary" onClick={()=>this.gotobooking(obj.vid)}>BOOK</Button></td>
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
            <br/>
            <div class="row justify-content-around">
            <div class="col-md-12 bg-light shadow px-4 pt-4">
              <center>
                <h4 class="display-4">
                <i class="fa fa-search" aria-hidden="true"></i> Search Vehicle </h4>
                <p class="text-primary">Enter your choice to search vehicle</p>
                </center>
                <hr/>
              <Form>
                    <FormGroup row>
                      <Label sm={2}>Enter city </Label>
                      <Col sm={10}>
                          <Input type="text" name="city" onChange={this.handleChange}/>
                      </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup row>
                      <Label sm={2}>Enter Vehicle type </Label>
                      
                      <Col sm={10}>
                          <Input type="select" name="vtype" onChange={this.handleChange}>
                            <option>Select any one</option>
                            <option value="car">CAR</option>
                            <option value="bike">BIKE</option>
                          </Input>
                      </Col>
                    </FormGroup>
                    <br/>
                    <FormGroup check row>
                        <Col>
                          <center>
                            <Button color="primary" onClick={this.submitData}>Submit</Button> &nbsp;
                            <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
                            </center>
                        </Col>
                    </FormGroup>
                    <br/>
              </Form>
            {comp}
            </div>
          </div>
        </div>
        )
    }
}
export default Searchvehicle;