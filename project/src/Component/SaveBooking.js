import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import NavbarHome from "./NavbarHome";
import Footer from './Footer';

class SaveBooking extends React.Component {
    constructor(props)
  {
    const myCurrentDate = new Date();
    const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();

    super(props)
    this.state={
      fdate:"",
      tdate:"",
      destto:"",
      destfrom:"",
      datetime:"",
      vid:"",
      tamt:"",
      booking:{}
    }
  }
  handleChange=(e)=>{
    
    const nm=e.target.name;
    const val=e.target.value;
    this.setState({[nm]:val});
    console.log(nm);
    console.log(val);
    if(nm =="destfrom" | nm == "destto")
    {
      alert(this.state.destfrom);
      alert(this.state.destto);
      const nm1="datetime";
      const nm2="vid";
      const myCurrentDate = new Date();
      const date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth()+1) + '-' + myCurrentDate.getDate() +' '+ myCurrentDate.getHours()+':'+ myCurrentDate.getMinutes()+':'+ myCurrentDate.getSeconds();
      
      console.log(JSON.parse(localStorage.getItem("Bookedvehicle")).vid);
      e.preventDefault();
      this.setState({[nm1]:date})
      this.setState({[nm2]:JSON.parse(localStorage.getItem("Bookedvehicle")).vid});
      const date1=this.state.fdate;
      
      const date2=this.state.tdate;
      
      var msDiff = new Date(date1).getTime() - new Date(date2).getTime();    //Future date - current date
      var diffdays = Math.abs(msDiff / (1000 * 60 * 60 * 24));
      
      var total=null;
      let vtype=JSON.parse(localStorage.getItem("Bookedvehicle")).vtype;
      if(vtype=="car")
      {
        total=diffdays*1500;
      
      }
      else
      {
        total=diffdays*700;
      
      }
      this.setState({["tamt"]:total});
      localStorage.setItem("totalamount",total);
    }
   
   
  }
   
  submitData=(e)=>{
    const reqOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fdate:this.state.fdate,
        tdate:this.state.tdate,
        destto:this.state.destto,
        destfrom:this.state.destfrom,
        datetime:this.state.datetime,
        vid:this.state.vid
      })
    }
    fetch("http://localhost:8080/savebooking",reqOptions)
    .then(resp=>resp.json())
    .then(data=>{ 
        //alert(data);
        const json=JSON.parse(JSON.stringify(data));
        this.setState({booking:json});
        localStorage.setItem("Bookingdetails",JSON.stringify(this.state.booking));
        window.location.href="http://localhost:3000/savepayment";
    })
    //fetch("http://localhost:8000/")
    toast.success('✔ Booking Successfull!', {position: "top-center", autoClose: 8000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
  }
  render(props){
        
    const length=this.state.tamt.length;
    let comp;
    if(length!=0)
    {
      comp=<p>Total Amount : {this.state.tamt}</p>
    }
  return (
    <div>
      <Header />
    <div>
    <NavbarHome />
    </div>
    <div class="container-fluid my-3" >
      <div class="row justify-content-around">
            <div class="col-md-12 bg-light shadow px-4 pt-4">
              <center>
                <h4 class="display-4">
                <i class="fa fa-asterisk" aria-hidden="true"></i> Enter Booking Details </h4>
                <p class="text-primary">Enter valid Booking details.</p>
                </center>
                <hr/>
              <Form>
                  <FormGroup row>
                  <Label for="exampleDate" sm={10}>From Date :</Label>
                  <Col sm={10}>
                  <Input
                    type="date"
                    name="fdate"
                    id="exampleFdate"
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                  <Label for="exampleDate" sm={10}>To Date:</Label>
                  <Col sm={10}>
                  <Input
                    type="date"
                    name="tdate"
                    id="exampleLdate"
                    placeholder="date placeholder"
                    onChange={this.handleChange}
                  />
                  </Col>
                </FormGroup>
                <br/>
                  <FormGroup row>
                  <Label for="exampleDestto" sm={10}>Enter Starting point : </Label>
                  <Col sm={10}>
                    <Input type="text" name="destto" id="exampleDestto" onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                  <Label for="exampleDestfrom" sm={10}>Enter Ending point : </Label>
                  <Col sm={10}>
                  <Input type="text" name="destfrom" id="exampleLname" onChange={this.handleChange}/>
                  </Col>
                </FormGroup>
                 {comp}
                 <br/>
                <FormGroup check row>
                  <Col>
                  <center>
                    <Button color="primary"onClick={this.submitData}>Payment</Button> &nbsp;
                    <Button type="reset" class="btn btn-danger"color="danger">Reset</Button>
                    <ToastContainer position="top-center"autoClose={8000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    </center>
                  </Col>
                </FormGroup>
                <br/>
              </Form>
              </div>
              <div>
              <Footer />
              </div>
            </div>
          </div>
    </div>
  );
}}

export default SaveBooking;