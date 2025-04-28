import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import Pipe from "../../images/SVG/pipe-.svg"
import Tube from "../../images/SVG/tube.svg"
import PlateSheet from "../../images/SVG/metalsheet.svg"
import Vavle from "../../images/SVG/valve.svg"
import Structural from "../../images/SVG/structural.svg"
import Forging from "../../images/SVG/forging.svg"
const products = [
  {
    title: "Tube",
    icon: Tube,
    link: "/Products/tube/",
    description:
      "Explore our wide range of industrial tubes for every application.",
  },
  {
    title: "Pipe & Fitting",
    icon: Pipe,
    link: "/Products/pipe-fitting/",
    description:
      "High-quality pipes and fittings suited for all industrial uses.",
  },
  {
    title: "Plate & Sheet",
    icon: PlateSheet,
    link: "/Products/plate-sheet/",
    description: "Durable plates and sheets in various grades and sizes.",
  },
  {
    title: "Structural",
    icon: Structural,
    link: "/Products/structural/",
    description:
      "Structural products ideal for construction and engineering projects.",
  },
  {
    title: "Forgings & Flanges",
    icon: Forging,
    link: "/Products/forgings-flanges/",
    description: "Premium forgings and flanges built to industry standards.",
  },
  {
    title: "Valve",
    icon: Vavle,
    link: "/Products/valve/",
    description: "Reliable valve solutions for industrial fluid control.",
  },
]

const ProductCard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((item, idx) => (
          <div key={idx} className="col">
            <Link to={item.link} className="text-decoration-none text-dark">
              <div className={classNames(styles.card, "text-center", "h-100")}>
                <div className={classNames(styles.iconWrapper, "mx-auto")}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text mt-2">{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
