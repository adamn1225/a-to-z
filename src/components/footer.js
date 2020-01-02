import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyles.footer}>
             <Container>
              <Row className={footerStyles.linkRow}>
               <Col className={footerStyles.footerSocial} activeClassName={footerStyles.activeNavItem}>
               <h5>OUR SERVICES</h5>
               <Link>SERVICES</Link>
               <Link>INTERNATIONAL</Link>
               <Link>ENCLOSED</Link>
               <Link to="./blog">BLOG</Link>
               <Link>SITEMAP</Link>
               <Link to="./">HOME</Link>
              </Col>
              <Col className={footerStyles.footerNav}>
                <h5>CONTACT US</h5>
                <p>TOLL FREE: <a href="tel:954-826-4318">(800)-888-8888</a></p>
                <a href="tel:954-826-4318"></a>
                <p>EMAIL: <a href="">info@atozlogisitcs.com</a></p>
               </Col>
               <Col className={footerStyles.footerSocial}>
              <a>Facebook</a>
              <a>Twitter</a>
               </Col>
              </Row>
            </Container>
            <div className={footerStyles.copyright}><p>Created by {data.site.siteMetadata.author}, copyright 2019</p></div>
            
        </footer>
    )
}

export default Footer