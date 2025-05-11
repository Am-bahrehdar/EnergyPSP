import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

const categories = [
  {
    title: "Pipe & Tube",
    slug: "pipe-tube",
    subItems: ["Carbon Steel", "Stainless Steel", "Copper"],
  },
  {
    title: "Fittings",
    slug: "fittings",
    subItems: ["Carbon Steel", "Stainless Steel", "Forged", "Malleable Iron"],
  },
  {
    title: "Flanges",
    slug: "flanges",
    subItems: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
  },
  {
    title: "Gasket",
    slug: "gasket",
    subItems: ["Rubber", "Non-Asbestos", "High-Temp", "Nuts & Bolts"],
  },
  {
    title: "Accessories",
    slug: "accessories",
    subItems: ["Backing Rings", "Suction Diffusers", "Sealants"],
  },
  {
    title: "Plate & Profile",
    slug: "plate-profile",
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
        {categories.map((cat, idx) => (
          <li key={idx} className="mb-2">
            <button
              className={classNames(styles.link, "btn w-100 text-start")}
              onClick={() => toggle(idx)}
              aria-expanded={open === idx}
            >
              {cat.title}
            </button>

            <ul
              className={classNames(styles.subList, "ps-3 list-unstyled")}
              style={{
                maxHeight: open === idx ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              {cat.subItems.map((item, j) => {
                const variantParam = encodeURIComponent(item)
                return (
                  <li key={j} className="mb-1">
                    <Link
                      className={styles.subLink}
                      to={`/Products/${cat.slug}/?tab=${variantParam}`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
