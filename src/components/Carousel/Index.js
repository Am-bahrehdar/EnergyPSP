import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import * as styles from "./styles.module.scss"
import classNames from "classnames"
import slide1 from "../../images/Carousel/PIPING-1600x840-1.jpg"
import slide2 from "../../images/Carousel/POWERPLANT-2022.jpg"
import slide3 from "../../images/Carousel/Thermal-Power-Plant.jpg"

const Carousel = () => {
  return (
    <div className="d-flex justify-content-center px-3 py-4">
      <div
        id="carousel"
        className={classNames("carousel slide", styles.carousel)}
        data-bs-ride="carousel"
        style={{ maxWidth: "100%", borderRadius: "12px", overflow: "hidden" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
