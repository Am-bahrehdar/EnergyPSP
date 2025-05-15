import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

/**
 * SummarySection: displays a queried image on one side and text on the other,
 * with an optional Line Card download button (disabled if no PDF).
 */
const SummarySection = ({
  title = "High-Quality Piping Solutions by Energy Piping Service Provider (EPSP)",
  description = "We provide a wide array of premium products, including pipes, tubes, fittings, flanges, hangers, fasteners, and bolts, tailored to meet the unique needs of each industry.",
  lineCardUrl,
}) => {
  // Querying a placeholder image for now
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "carousel/slide2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  const imageData = getImage(data.placeholder.childImageSharp)

  return (
    <section className={styles.summarySection}>
      <div
        className={classNames(
          "container d-flex flex-column flex-md-row align-items-stretch py-5",
          styles.wrapper
        )}
      >
        {/* Image side */}
        <div className={classNames("mb-4 mb-md-0", styles.imageWrapper)}>
          <GatsbyImage
            image={imageData}
            alt={title}
            className={styles.image}
            style={{ height: "100%" }}
          />
        </div>

        {/* Text side */}
        <div className={styles.textWrapper}>
          <h2 className="fw-bold mb-3">{title}</h2>
          <p className="mb-4">{description}</p>

          <a
            href={lineCardUrl || "#"}
            className={classNames("btn btn-primary", {
              [styles.disabledButton]: !lineCardUrl,
            })}
            {...(!lineCardUrl && { tabIndex: -1, "aria-disabled": true })}
          >
            Download Line Card
          </a>
        </div>
      </div>
    </section>
  )
}

export default SummarySection
