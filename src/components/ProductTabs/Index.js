import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image" // ✅ Import GatsbyImage
import * as styles from "./styles.module.scss"
import classNames from "classnames"

const ProductTabs = ({ summary, variants }) => {
  const variantKeys = Object.keys(variants)
  const [activeTab, setActiveTab] = useState(variantKeys[0])
  const sectionRef = useRef(null)

  // Set tab from URL param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlTab = params.get("tab")

    if (urlTab && variantKeys.includes(urlTab)) {
      setActiveTab(urlTab)

      // Scroll into view
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }, [variantKeys])

  return (
    <div ref={sectionRef} className="container py-5">
      {/* Summary (global, top section) */}
      <div className={styles.summary}>
        <h1 className="fw-bold mb-3">{summary.title}</h1>
        <p>{summary.description}</p>
      </div>

      {/* Tabs */}
      <ul className={classNames("nav nav-tabs", styles.tabs)}>
        {variantKeys.map(key => (
          <li className="nav-item" key={key}>
            <button
              className={classNames("nav-link", {
                active: activeTab === key,
              })}
              onClick={() => setActiveTab(key)}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className={classNames("tab-content", styles.tabContent)}>
        <div className="row align-items-center mt-4 g-2">
          {/* Text Column */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-semibold">{variants[activeTab].title}</h3>
            <p>{variants[activeTab].description}</p>
          </div>

          {/* Image Column */}
          <div className="col-md-6 text-center">
            {variants[activeTab].imageData ? (
              <GatsbyImage
                image={variants[activeTab].imageData}
                alt={variants[activeTab].title}
                className={styles.image}
              />
            ) : (
              <p>No image available</p> // fallback if no image
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

ProductTabs.propTypes = {
  summary: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  variants: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imageData: PropTypes.object, // ✅ updated to expect imageData (gatsbyImageData object)
    })
  ),
}

export default ProductTabs
