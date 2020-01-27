import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import UserForm from '../components/UserForm'

import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';

const IndexPage = () => {
    return (
        <Layout>
           
            <section className="topSec">
                <div className="topBanner">
            <div className="formText">
            <Col>
            <h1>Getting a Quote is Free & Easy</h1>
            <h2>We Care About Your Shipment</h2>
            <h4>- Door-to-Door Service</h4>
            <h4>- Bonded & Insured Carriers</h4>
            <h4>- Supreme Costumer Service</h4><br />
            <h4><strong>Fill out the form below for a shipping quote</strong></h4>

                <div className="topButtons">
                  <div className="quoteButton">
                    <Link to="/form"><Button variant="info">Get a Free Estimate</Button></Link>
                  </div>
                  <div className="careerButton">
                    <Link to="/form"><Button variant="outline-info">Ship for Us</Button></Link>
                   </div>
                </div>

                
                </Col>
                <Col>
                <div>
                </div>
                </Col>
                </div>
                </div>
                </section>
                
           
               <Container>        
                   <Row>
                   <div className="transportTypes">
                       <Col>
                       <h5>OPEN TRAILER TRANSPORT</h5>
                       <img src="https://img.icons8.com/plasticine/64/000000/car.png"></img>
                       <p>Transporting with an open carrier can be a cheaper option...</p>
                       </Col>
                       <Col>
                       <h5>ENCLOSED TRANSPORT</h5>
                       <img src="https://img.icons8.com/cotton/64/000000/truck.png"></img>
                       <p>Enclosed carriers could be the best option for you if you're transporting a luxury vehicle</p>
                       </Col>
                       <Col>
                       <h5>HEAVY TRANSPORT</h5>
                       <img src="https://img.icons8.com/dusk/64/000000/bulldozer.png"></img>
                       <p>What goes into heavy freight transport? </p>
                       </Col>
                       </div>
                   </Row>
               </Container>

            {/* <section>
              <div className="second">
                <Col className="openTransport">
                    <h3>OPEN CAR TRANSPORT</h3>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
                <Col className="enclosed">ENCLOSED CAR TRANSPORT<br /><Button variant="info" size="lg">LEARN MORE</Button></Col>
                <Col className="heavy">
                    <h3>HEAVY TRANSPORT</h3>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
              </div>
          </section> */}
                <Container>
                    <div className="atozShipping">
                    
                    <Col className="howItIs">
                    <h2>How It Is To Ship With A-to-Z</h2>
                    <p>We make shipping cheap by directly connection you with carriers who have extra truck space.</p>
                    <Link to="./">Read More</Link>
                    </Col>
                    <Col>
                    <img className="relaxing" src={require("../images/relaxing-laptop.jpg")} alt="" />
                    </Col>
                    </div>
                    <div className="businessShipping">
                    <Col>
                    <img className="businessLoad" src={require("../images/business-shipping.jpg")} alt="" />
                    </Col>
                    <Col className="business">
                    <h2>Shipping For The Business Owners</h2>
                    <p>We take care of everything - scheduling, paperwork, payment, and etc. We help you transport faster so that you can focus on taking care of your business. </p>
                    <Link to="./">Read More</Link>
                    </Col>
                    </div>
                </Container>


                  <Testimonials />

                  <Container>
                  <Row>
                  <div className="services">
                      <Col>
                      <h6>Insurance Coverage</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/vehicle-security.png"></img>
                      <p>Car transport companies include insurance coverage in your shipping quote. Our selected auto haulers must meet insurance standards before qualifying to be part of our carrier network.</p>
                      </Col>
                      <Col>
                      <h6 className="doorImg">Door-to-Door Service</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/treasure-map.png"></img>
                      <p>Don't worry about having to drive out of your way to meet your driver. The driver will come straight to your pick up location and deliver it exactly where you need your shippment to be.</p>
                      </Col>
                      <Col>
                      <h6 className="noPayImg">No Up Front Payments</h6>
                      <img src="https://img.icons8.com/officel//000000/no-hidden-fee.png"></img>
                      <p>You read that right, $0! The best auto transport companies charge you once the carrier has been dispatched for your order. You can book with your auto transport company now without seeing a bill.</p>
                      </Col>
                      <Col>
                      <h6 className="csImg">Superior Costumer Service</h6>
                      <img src="https://img.icons8.com/dusk/64/000000/service.png"></img>
                      <p>Our professional auto transport company advisors work passionately to ensure you're working with the best vehicle transportation company. They will monitor your shipment around the clock.</p>
                      </Col>
                      </div>
                  </Row>
                  </Container>
                  <article className='ctaSection'>
                      <Col className="cta">
                      <h2>Ready To Get Your Shippment Booked With A to Z Logisitcs?</h2>
                      <h4>Click to button below to get a free shipping quote or <b><a href="tel:954-826-4318">CALL US!</a></b></h4>
                      <Button>Get A Quote Instantly</Button>
                      </Col>              
                 </article>

                 <article className="aboutUs">
                  <h3>Why You Should Work With One of the Best Transport Companies</h3><br />
                  <Container>
                      <Col>
                      <p>With over 10 years of experience in the hauling industry, we have the capability to take you to the moon. Expect supreme customer service and expert solutions for your shippment. We're here for you 365/24/7.</p>
                      <p>With over 10 years of experience in the hauling industry, we have the capability to take you to the moon. Expect supreme customer service and expert solutions for your shippment. We're here for you 365/24/7.</p>
                      </Col>
                      <Col>
                      <img src="https://img.icons8.com/dusk/64/000000/treasure-map.png"></img>
                     
                      </Col>
                  </Container>
                  </article>
          
        </Layout>
    )
}

export default IndexPage
