import * as React from "react"
import Seo from "../components/seo"
import Carousel from "../components/Carousel/Index"
import ProductCard from "../components/productCard/index"
import SummarySection from "../components/summarysection"

const IndexPage = () => (
  <>
    <Seo
      title="Home"
      description="High-quality piping solutions—tubes, fittings, flanges, extrusions, and more."
    />
    <main>
      <Carousel />
      <ProductCard />
      <SummarySection />
    </main>
  </>
)

export default IndexPage
