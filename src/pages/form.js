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
            <UserForm />

            <Container className="services">
                  <Row>
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
                  </Row>
                  </Container>

            {/* <section>
              <div className="second">
                <Col className="openTransport">
                    <h3>OPEN CAR TRANSPORT</h3>
                    <p>Transporting with an open carrier can be a cheaper option, and can also give the driver better visibility to inspect the vehicle.<Link>Speak with an agent</Link> Speak with an agent to find your best options.</p>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
                <Col className="enclosed">ENCLOSED CAR TRANSPORT<br /><Button variant="info" size="lg">LEARN MORE</Button></Col>
                <Col className="heavy">
                    <h3>HEAVY TRANSPORT</h3>
                    <p>Backhoes, graders, bull dozers, we do it all. We have the experience in knowledge when dealing with heavy equipment.</p>
                    <Button variant="light">LEARN MORE</Button>
                </Col>
              </div>
              
          </section> */}

                  <Testimonials />
          
        </Layout>
    )
}

export default IndexPage
