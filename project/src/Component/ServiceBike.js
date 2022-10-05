import React from "react";
import { Col, Row, Form, FormGroup } from 'reactstrap';

function ServiceBike(props) {
    return (
        <div class="container-fluid my-3">
            <div class="row justify-content-around">
                <div class="col-md-7 bg-light shadow px-4 pt-4">
                    <h4 class="display-5 ">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Welcome to Online Car & Bike Rental System</h4>
                    <p class="text-secondary">Steps for Customer and Owner to Enter Bike Details</p> <a href="http://localhost:3000">HOME</a>
                    <hr/>
                    <Form>
                        <FormGroup>
                            <Col>
                                <Row>
                                    <h3> <b> Steps for Booking Bike for Customer</b> </h3>
                                    <p> 1 If you are visitng the website then please do click on sign-up and select customer Registration.</p>
                                    <p>2. if you have already account then please do login for searching the Bike. </p>
                                    <p>3. After Successful Login customer can search and book the Bike. </p>
                                    <p>4. To search the vehicle , please select the city name and Bike type. </p>
                                    <p>5. As per customer prefrence, Available Bike will display on page  for booking. </p>
                                    <p>6. After the booking Bike for rent you can check the status and update the order in customer profile.</p>
                                    <p>7. After Booking customer have to make payment to take the Bike on rent.</p>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Requirment for Booking</b></h4>
                                    <p>1. Customer Adhar number. </p>
                                    <p>2. Vehicle licence.  </p><br/>
                                </Row>
                                <Row>
                                    <h3> <b>Steps for Registration of Bike for Owner</b></h3><br/>
                                    <p>1. If you are visitng the website then please do click on sign-up and select Owner Registration.</p>
                                    <p>2. if you have already account then please do login for Registering the Bike. </p>
                                    <p>2. After Successful Login Owner can register the Bike on website. </p>
                                    <p>4. For register the Bike owner have to click on "Add Vehicle". </p>
                                    <p>5. Owner Can update and delete the Bike details. </p>
                                    <p>6. Owner can Update his profile</p><br/>
                                </Row>
                                <Row>
                                    <h4> <b> Documents Required For Registration of Bike</b></h4>
                                    <p>1. Bike Registration number and RC Documents.</p>
                                    <p>2. Bike Insurance and PUC.  </p>
                                    <a href="http://localhost:3000">HOME</a>
                                </Row>
                            </Col>
                        </FormGroup>
                    </Form>
        </div>
        </div>
        </div>
       

    );

} export default ServiceBike;