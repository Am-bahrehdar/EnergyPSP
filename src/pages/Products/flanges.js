import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import ProductTabs from "../../components/ProductTabs/Index"
import flangesData from "../../productsdata/flangesdata"

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
      {/* ✅ SEO section */}
      <Seo
        title="Flanges"
        description="Explore EnergyPSP's high-quality carbon steel, stainless steel, and alloy flanges for industrial applications across North America."
      />

      {/* ✅ ProductTabs section */}
      <ProductTabs summary={flangesData.summary} variants={enrichedVariants} />
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
