import * as React from "react"
import Header from "../components/header"
import FooterComponent from "../components/footer/index"

const AboutUs = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container py-5">
          <h1 className="text-center mb-4  ">About Us</h1>
          <p className=" fs-5">
            Welcome to Energy PSP – your trusted partner in innovative energy
            solutions. With a passion for sustainable design, installation, and
            custom energy systems, we power the future with integrity and
            efficiency.
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default AboutUs
