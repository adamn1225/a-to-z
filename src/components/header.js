import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { NavLink } from 'react-router-dom'

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
        <header className={headerStyles.header}>
             <nav>

           
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
                </ul>
            </nav>
        </header>
    )
}

export default Header