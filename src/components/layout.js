/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import FooterComponent from "./footer"
import * as styles from "./styles.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.pageWrapper}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={styles.mainContent}>{children}</main>
      <FooterComponent />
    </div>
  )
}

export default Layout
