// src/pages/products/fittings.js
import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../../components/seo"
import ProductTabs from "../../components/ProductTabs/Index"
import fittingData from "../../productsdata/fittingData"
import Sidebar from "../../components/sidebar"
import CallToAction from "../../components/calltoaction"

const FittingsPage = ({ data }) => {
  const enrichedVariants = {
    "Carbon Steel Weld Fittings": {
      ...fittingData.variants["Carbon Steel Weld Fittings"],
      imageData: data.carbonSteel.childImageSharp.gatsbyImageData,
    },
    "Stainless Steel Fittings": {
      ...fittingData.variants["Stainless Steel Fittings"],
      imageData: data.stainlessSteel.childImageSharp.gatsbyImageData,
    },
    "Copper Fittings": {
      ...fittingData.variants["Copper Fittings"],
      imageData: data.copper.childImageSharp.gatsbyImageData,
    },
    "Brass and Bronze Fittings": {
      ...fittingData.variants["Brass and Bronze Fittings"],
      imageData: data.brassBronze.childImageSharp.gatsbyImageData,
    },
    "Malleable Iron Fittings": {
      ...fittingData.variants["Malleable Iron Fittings"],
      imageData: data.malleableIron.childImageSharp.gatsbyImageData,
    },
  }

  return (
    <div className="container">
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Sidebar vertically centered on larger screens */}
        <div className="d-none d-lg-flex flex-column justify-content-center me-4">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-grow-1 p-4">
          <ProductTabs
            summary={fittingData.summary}
            variants={enrichedVariants}
          />
          <CallToAction title="Looking for custom flanges or fittings?" />
        </main>
      </div>
    </div>
  )
}

export const Head = ({ location }) => (
  <Seo
    title="Fittings"
    description="Discover EnergyPSP's extensive range of industrial fittings, including carbon steel, stainless steel, copper, and specialty materials built for reliable piping connections."
    pathname={location.pathname}
  />
)

export const query = graphql`
  query {
    carbonSteel: file(
      relativePath: { eq: "products/fitting/carbon_steel_weld_fittings.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    stainlessSteel: file(
      relativePath: { eq: "products/fitting/stainless_steel_fittings.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    copper: file(relativePath: { eq: "products/fitting/copper_fittings.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    brassBronze: file(
      relativePath: { eq: "products/fitting/brass_bronze_fittings.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    malleableIron: file(
      relativePath: { eq: "products/fitting/malleable_iron_fittings.avif" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          height: 500
          aspectRatio: 1
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

export default FittingsPage
