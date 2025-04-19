import React from "react"
import ProductTabs from "../../components/ProductTabs/Index"
import pipeFittingData from "../../productsdata/pipefittingdata"

const PipeFittingPage = () => {
  return (
    <ProductTabs
      summary={pipeFittingData.summary}
      variants={pipeFittingData.variants}
    />
  )
}

export default PipeFittingPage
