import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import { Button } from 'react-bootstrap';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)

    console.log(data)


    return (
        <Layout>
          
          <article className="top-gallery">
            <h1>Transport Gallery</h1>
          </article>
          <div className="gallery">
            <Container>
              <Row>
                <Col className="galleryImg">
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              <Row>
                <Col className="galleryImg">
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              <Row>
                <Col>
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col>
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col>
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              </Container>
              </div>

              <article className='ctaSection'>
                      <Col className="cta">
                      <h2>Ready To Get Your Shippment Booked With A to Z Logisitcs?</h2>
                      <h4>Click to button below to get a free shipping quote or <b><a href="tel:954-826-4318">CALL US!</a></b></h4>
                      <Button>Get A Quote Instantly</Button>
                      </Col>              
                 </article>

                 <div className="gallery">
            <Container>
              <Row>
                <Col className="galleryImg">
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              <Row>
                <Col className="galleryImg">
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col className="galleryImg">
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              <Row>
                <Col>
                <img src={require("../images/luxauto-transport.jpg")} /> 
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col>
                <img src={require("../images/mustang-auto-transport.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
                <Col>
                <img src={require("../images/bulldozer.jpg")} />
                <h5>Transport a (blank)</h5>
                <p>Annoy kitten brother with poking gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye for find empty spot in cupboard and sleep all day and purr and shove bum in owner's face like camera lens. Murf pratt ungow ungow cats woo so meow to be let out. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am catching very fast laser pointer or throw down all the stuff in the kitchen yet cat walks in keyboard . </p>
                </Col>
              </Row>
              </Container>
              </div>
            
            {/* <ol>
                {data.allMarkdownRemark.edges.map((edge)=> {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol> */}
        </Layout>
    )
}

export default BlogPage