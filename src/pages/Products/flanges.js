import React from "react"
import { graphql } from "gatsby"
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
    <>
      <div className="container">
        <Seo
          title="Flanges"
          description="Explore EnergyPSP's high-quality carbon steel, stainless steel, and alloy flanges for industrial applications across North America."
        />

        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <div className="d-flex flex-column justify-content-center d-none d-none d-lg-flex">
            <Sidebar />
          </div>
          <main className="flex-grow-1 p-4">
            <ProductTabs
              summary={flangesData.summary}
              variants={enrichedVariants}
            />
            <CallToAction title="Looking for custom flanges or fittings?" />
          </main>
        </div>
      </div>
    </>
  )
}

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
