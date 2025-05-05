import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import ProductTabs from "../../components/ProductTabs/Index"
import pipetubeData from "../../productsdata/pipetubedata"
import Sidebar from "../../components/sidebar"

const PipeTubePage = ({ data }) => {
  const enrichedVariants = {
    ...pipetubeData.variants,
    "Carbon Steel": {
      ...pipetubeData.variants["Carbon Steel"],
      imageData: data.carbonSteel.childImageSharp.gatsbyImageData,
    },
    "Stainless Steel": {
      ...pipetubeData.variants["Stainless Steel"],
      imageData: data.stainlessSteel.childImageSharp.gatsbyImageData,
    },
    Copper: {
      ...pipetubeData.variants["Copper"],
      imageData: data.copper.childImageSharp.gatsbyImageData,
    },
  }

  return (
    <>
      <div className="container">
        <Seo
          title="Pipe Fittings"
          description="Explore EnergyPSP's high-quality carbon steel, stainless steel, and copper pipe fittings for industrial applications across North America."
        />

        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <div className="d-flex flex-column justify-content-center">
            <Sidebar />
          </div>
          <main className="flex-grow-1 p-4">
            <ProductTabs
              summary={pipetubeData.summary}
              variants={enrichedVariants}
            />
          </main>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    carbonSteel: file(
      relativePath: { eq: "products/carbon-steel-lsaw-pipe.jpg" }
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
      relativePath: { eq: "products/Stainless-Steel-Pipe-Fittings.jpeg" }
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
    copper: file(relativePath: { eq: "products/Copper-Pipe-Fittings.png" }) {
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

export default PipeTubePage
