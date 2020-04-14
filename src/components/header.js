import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Button } from 'react-bootstrap';
import headerStyles from './header.module.scss'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'


const Header = () => {
    const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
    `)

    return (
        <div>
            {/* <div className={headerStyles.topHeader}>
                <Link><p>MC#000000</p></Link>
            </div> */}
        <header className={headerStyles.header}>
             <nav>

           <div className={headerStyles.flex}>
                <ul className={headerStyles.navList}>
                    <li>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </li>
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home</Link> 
                    </li><br />
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/blog">Blog</Link>
                    </li><br />
                     <li> 
                    <div className={headerStyles.dropdown}>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">Transport Services</Link>
                      <div className={headerStyles.dropdownItems}>
                       <a href="#">Link 1</a>
                       <a href="#">Link 2</a>
                       <a href="#">Link 3</a>
                     </div>
                    </div>
                    </li>
                    <br />
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/how">How it Works</Link>
                    </li>


                     <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/contact">Contact</Link>
                    </li>

                </ul>

                {/* mobile menu */}

                <div className={headerStyles.mobList}>
                    <h1><FaAlignJustify /></h1>
                    <div className={headerStyles.mobItems}>
                       <Link to="/blog">Blog</Link>
                       <a href="#">Link 2</a>
                       <a href="#">Link 3</a>
                    </div>
                </div>


              <div className={headerStyles.mcNum}>
              <p>
              MC# 1322334 
              </p>
              <p className={headerStyles.vline}>Talk To Us!<br /> <a href="tel:800-888-8888">800-888-8888</a></p>
              </div>
              </div>
            </nav>

            {/* <div className={headerStyles.mcNum}>
                <p>MC# 1322334</p>
                <p className={headerStyles.vline}>Talk To Us!<br /> <a href="tel:800-888-8888">800-888-8888</a></p>
                <Link className={headerStyles.Buttonvline} to="/form"><Button variant="info">Get Quote</Button></Link>
            </div> */}
            
        </header>
        </div>
    )
}

export default Header