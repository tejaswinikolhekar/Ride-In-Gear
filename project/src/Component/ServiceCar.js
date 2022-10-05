import React from "react";
import { Col, Row, Form, FormGroup } from 'reactstrap';


function ServiceCar(props) {
    return (
        <div>
            <div class="row justify-content-around">
                <div class="col-md-7 bg-light shadow px-4 pt-4">
                    <h4 class="display-5 ">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Welcome to Online Car & Bike Rental System</h4>
                    <p class="text-secondary">Steps for Customer and Owner to Enter Car Details</p> <a href="http://localhost:3000">HOME</a>
                    <hr/>
                    <Form>
                        <FormGroup>
                            <Col>
                                <Row>
                                    <h4> <b> Steps for Booking Car for Customer</b> </h4>
                                    <p> 1 If you are visitng the website then please do click on sign-up and select customer Registration.</p>
                                    <p>2. if you have already account then please do login for searching the car. </p>
                                    <p>3. After Successful Login customer can search and book the Car. </p>
                                    <p>4. To search the vehicle , please select the city name and Car type. </p>
                                    <p>5. As per customer prefrence, Available Car will display on page  for booking. </p>
                                    <p>6. After the booking Car for rent you can check the status and update the order in customer profile.</p>
                                    <p>7. After Booking customer have to make payment to take the Car on rent.</p>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Requirment for Booking</b></h4>
                                    <p>1. Customer Adhar number. </p>
                                    <p>2. Vehicle licence.  </p><br/>
                                </Row>
                                <Row>
                                <h4> <b>Steps for Registration of Car for Owner</b></h4><br/>
                                    <p>1. If you are visitng the website then please do click on sign-up and select Owner Registration.</p>
                                    <p>2. if you have already account then please do login for Registering the Car. </p>
                                    <p>2. After Successful Login Owner can register the Car on website. </p>
                                    <p>4. For register the Car owner have to click on "Add Vehicle". </p>
                                    <p>5. Owner Can update and delete the Car details. </p>
                                    <p>6. Owner can Update his profile</p><br/>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Required For Registration of Car</b></h4>
                                    <p>1. Car Registration number and RC Documents.</p>
                                    <p>2. Car Insurance and PUC.  </p>
                                    <a href="http://localhost:3000">HOME</a>
                                </Row>
                                </Col>
                        </FormGroup>
                    </Form>
        </div>
    </div> 
</div>
       

    );

} export default ServiceCar;