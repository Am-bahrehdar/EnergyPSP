import * as React from "react"
import Header from "../components/header"
import Carousel from "../components/Carousel/Index"
import FooterComponent from "../components/footer/index"
import ProductCard from "../components/productCard/index"

const IndexPage = () => (
  <>
    <Header siteTitle="Energy PSP" />

    <main>
      <ProductCard></ProductCard>
      <Carousel></Carousel>
    </main>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </>
)

export default IndexPage
