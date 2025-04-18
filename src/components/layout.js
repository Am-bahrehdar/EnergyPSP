import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import FooterComponent from "../components/footer/index"
import "./layout.css"

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
    <div className="layout-wrapper">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="layout-content">{children}</main>
      <FooterComponent />
    </div>
  )
}

export default Layout
