import React from "react"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import Pipe from "../../images/SVG/Plate -sheet.png"
import { Link } from "gatsby"

const products = [
  { title: "Tube", icon: Pipe, link: "/Products/tube/" },
  { title: "Pipe & Fitting", icon: Pipe, link: "/Products/pipe-fitting/" },
  { title: "Plate & Sheet", icon: Pipe, link: "/Products/plate-sheet" },
  { title: "Structural", icon: Pipe, link: "/Products/structural" },
  {
    title: "Forgings & Flanges",
    icon: Pipe,
    link: "/Products/forgings-flanges",
  },
  { title: "Valve", icon: Pipe, link: "/Products/valve" },
]

const ProductCard = () => {
  return (
    <div className="container py-5 ">
      <h2 className="text-center fw-bold mb-5">Products</h2>
      <div className="row g-4">
        {products.map((item, idx) => (
          <div key={idx} className="col-6 col-md-4">
            <Link to={item.link} className="text-decoration-none text-dark">
              <div className={classNames(styles.card, "text-center")}>
                <div className={classNames(styles.iconWrapper, "mx-auto")}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 className="mt-3 fw-bold">{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
