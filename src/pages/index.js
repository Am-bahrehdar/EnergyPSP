import * as React from "react"
import Header from "../components/header"
import Carousel from "../components/Carousel/Index"
import FooterComponent from "../components/footer/index"
import ProductCard from "../components/ProductCard/index"

const IndexPage = () => (
  <>
    <main>
      <ProductCard></ProductCard>
      <Carousel></Carousel>
    </main>
  </>
)

export default IndexPage
