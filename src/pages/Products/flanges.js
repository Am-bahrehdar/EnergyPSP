// src/pages/products/flanges.js
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ProductTabs from "../../components/ProductTabs/Index"
import flangesData from "../../productsdata/flangesdata"
import Sidebar from "../../components/sidebar"
import CallToAction from "../../components/calltoaction"

const FlangesPage = ({ data }) => {
  const enrichedVariants = {
    ...flangesData.variants,
    "Carbon Steel Flanges": {
      ...flangesData.variants["Carbon Steel Flanges"],
      imageData: data.carbonSteel.childImageSharp.gatsbyImageData,
    },
    "Stainless Steel Flanges": {
      ...flangesData.variants["Stainless Steel Flanges"],
      imageData: data.stainlessSteel.childImageSharp.gatsbyImageData,
    },
    "Alloy Steel Flanges": {
      ...flangesData.variants["Alloy Steel Flanges"],
      imageData: data.alloySteel.childImageSharp.gatsbyImageData,
    },
  }

  return (
    <Layout>
      <div className="container">
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          {/* Sidebar vertically centered on larger screens */}
          <div className="d-none d-lg-flex flex-column justify-content-center me-4">
            <Sidebar />
          </div>

          {/* Main content area */}
          <main className="flex-grow-1 p-4">
            <ProductTabs
              summary={flangesData.summary}
              variants={enrichedVariants}
            />
            <CallToAction title="Looking for custom flanges or fittings?" />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo
    title="Flanges"
    description="Explore EnergyPSP’s high-quality carbon steel, stainless steel, and alloy flanges for industrial applications across North America."
    pathname={location.pathname}
  />
)

export const query = graphql`
  query {
    carbonSteel: file(
      relativePath: { eq: "products/carbon-steel-forgings-flanges.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    stainlessSteel: file(
      relativePath: { eq: "products/Stainless-Steel-forgings-flanges.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    alloySteel: file(
      relativePath: { eq: "products/Alloy-Steel-Forgings-Flanges.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default FlangesPage
