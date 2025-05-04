import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import Pipe from "../../images/SVG/pipe-.svg"
import Gasket from "../../images/SVG/gasket.svg"
import PlateSheet from "../../images/SVG/metalsheet.svg"

import Flanges from "../../images/SVG/flanges.svg"
import Accessories from "../../images/SVG/accessories.svg"
import Fitting from "../../images/SVG/fitting.svg"
const products = [
  {
    title: "Accessories",
    icon: Accessories,
    link: "/Products/accessories/",
    description: "Accessories",
  },
  {
    title: "Pipe & Tube",
    icon: Pipe,
    link: "/Products/pipe-tube/",
    description: "High-quality pipes and Tube suited for all industrial uses.",
  },
  {
    title: "Plate & Profile",
    icon: PlateSheet,
    link: "/Products/plate-profile/",
    description: "Durable plates and Profile in various grades and sizes.",
  },
  {
    title: "Fittings",
    icon: Fitting,
    link: "/Products/fittings/",
    description:
      "Fittings products ideal for construction and engineering projects.",
  },
  {
    title: "Flanges",
    icon: Flanges,
    link: "/Products/flanges/",
    description: "Premium flanges built to industry standards.",
  },
  {
    title: "Gaskets , Nuts & Bolts",
    icon: Gasket,
    link: "/Products/gasket/",
    description: "Gaskets , Nuts & Bolts",
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
