import React from "react"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import Pipe from "../../images/SVG/pipe-1.svg"
import Valve from "../../images/SVG/Valve.svg"
import Gasket from "../../images/SVG/Gasket.svg"
import Fitting from "../../images/SVG/Fitting.svg"

const products = [
  { title: "Pipe", icon: Pipe },
  { title: "Valve", icon: Valve },
  { title: "Gasket & Flange", icon: Gasket },
  { title: "Fitting", icon: Fitting },
]

const ProductCard = () => {
  return (
    <div className="container py-5 ">
      <h2 className="text-center fw-bold mb-5">Products</h2>
      <div className="row g-4">
        {products.map((item, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div className={classNames(styles.card, "text-center")}>
              <div className={classNames(styles.iconWrapper, "mx-auto")}>
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="mt-3 fw-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard
