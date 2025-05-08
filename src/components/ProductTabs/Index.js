import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.scss"
import classNames from "classnames"

const ProductTabs = ({ summary, variants }) => {
  const variantKeys = Object.keys(variants)
  const [activeTab, setActiveTab] = useState(variantKeys[0])
  const sectionRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlTab = params.get("tab")
    if (urlTab && variantKeys.includes(urlTab)) {
      setActiveTab(urlTab)
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }, [variantKeys])

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeTab])

  return (
    <div ref={sectionRef} className="container py-5">
      {/* Summary */}
      <div className={styles.summaryBox}>
        <h1>{summary.title}</h1>
        <p>{summary.description}</p>
      </div>

      {/* Tabs */}
      <ul
        className={classNames("nav nav-tabs fw-bold ", styles.tabs)}
        role="tablist"
      >
        {variantKeys.map(key => (
          <li className="nav-item" key={key}>
            <button
              className={classNames("nav-link", {
                active: activeTab === key,
              })}
              onClick={() => {
                setActiveTab(key)
                const params = new URLSearchParams(window.location.search)
                params.set("tab", key)
                window.history.replaceState(
                  {},
                  "",
                  `${window.location.pathname}?${params}`
                )
              }}
              role="tab"
              aria-selected={activeTab === key}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className={styles.variantBox}>
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center text-md-start">
            <h3>{variants[activeTab].title}</h3>
            <p>{variants[activeTab].description}</p>
          </div>
          <div className="col-md-6 text-center">
            {variants[activeTab].imageData ? (
              <GatsbyImage
                image={variants[activeTab].imageData}
                alt={variants[activeTab].title}
                className={styles.image}
              />
            ) : (
              <p>No image available</p>
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
      imageData: PropTypes.object,
    })
  ),
}

export default ProductTabs
