import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "carousel/slide1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            height: 400
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      slide2: file(relativePath: { eq: "carousel/slide2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            height: 400
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      slide3: file(relativePath: { eq: "carousel/slide3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            height: 400
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const slides = [
    { image: data.slide1.childImageSharp.gatsbyImageData, alt: "Slide 1" },
    { image: data.slide2.childImageSharp.gatsbyImageData, alt: "Slide 2" },
    { image: data.slide3.childImageSharp.gatsbyImageData, alt: "Slide 3" },
  ]

  return (
    <div className="container py-5 d-none d-md-block">
      {/* ✅ Hide carousel on small screens (mobile) */}
      <div
        id="carouselExampleAutoplaying"
        className={classNames("carousel slide", styles.carousel)}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div
              className={classNames("carousel-item", { active: idx === 0 })}
              key={idx}
            >
              <GatsbyImage
                image={slide.image}
                alt={slide.alt}
                className="d-block w-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
