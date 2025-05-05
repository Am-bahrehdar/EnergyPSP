import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

const categories = [
  {
    title: "Pipe & Tube",
    subItems: ["Carbon Steel", "Stainless Steel", "Copper"],
  },
  {
    title: "Fittings",
    subItems: ["Carbon Steel", "Stainless Steel", "Forged", "Malleable Iron"],
  },
  {
    title: "Flanges",
    subItems: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
  },
  {
    title: "Gaskets",
    subItems: ["Rubber", "Non-Asbestos", "High-Temp", "Nuts & Bolts"],
  },
  {
    title: "Accessories",
    subItems: ["Backing Rings", "Suction Diffusers", "Sealants"],
  },
  {
    title: "Plate & Sheet",
    subItems: ["Stainless Steel", "Carbon Steel", "Titanium", "Aluminum"],
  },
]

const Sidebar = () => {
  const [open, setOpen] = useState(null)

  const toggle = index => {
    setOpen(open === index ? null : index)
  }

  return (
    <nav className={classNames(styles.sidebar, "d-flex flex-column p-3")}>
      <h2 className={classNames(styles.title, "mb-4")}>Products</h2>

      <ul className={classNames(styles.productList, "list-unstyled")}>
        {categories.map((cat, index) => (
          <li key={index}>
            <button
              className={classNames(styles.link, "btn w-100 text-start")}
              onClick={() => toggle(index)}
              aria-expanded={open === index}
            >
              {cat.title}
            </button>

            <ul
              className={classNames(styles.subList, "ps-3 list-unstyled")}
              style={{
                maxHeight: open === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              {cat.subItems.map((item, i) => (
                <li key={i}>
                  <Link className={styles.subLink} to="/">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
