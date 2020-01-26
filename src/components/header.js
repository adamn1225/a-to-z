import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Button } from 'react-bootstrap';
import headerStyles from './header.module.scss'


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
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">About</Link>
                    </li><br />
                     <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/contact">Contact</Link>
                    </li>
                
                    {/* <li className={headerStyles.mcNum}>
                    <p>MC# 1322334</p>
                    <p className={headerStyles.vline}>Talk To Us!<br /> <a href="tel:800-888-8888">800-888-8888</a></p>
                    </li> */}
                </ul>

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