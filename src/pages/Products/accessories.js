import React from "react"
import Seo from "../../components/seo"
import accessoriesData from "../../productsdata/accessoriesData"
import classNames from "classnames"
import * as styles from "../../components/accessories/styles.module.scss"

const AccessoriesPage = () => {
  const { summary, variants } = accessoriesData

  return (
    <>
      <Seo
        title="Accessories"
        description="Discover EnergyPSP's high-quality pipe accessories including backing rings, suction diffusers, supports, and sealants — essential for safe and stable pipeline systems."
      />

      <div className={classNames("container", "py-5", styles.accessoriesPage)}>
        <h1 className={classNames("fw-bold", "mb-4", styles.pageTitle)}>
          {summary.title}
        </h1>
        <p className={classNames("mb-4", styles.pageDescription)}>
          {summary.description}
        </p>

        <div className={classNames("table-responsive", styles.tableWrapper)}>
          <table
            className={classNames("table", "table-bordered", styles.table)}
          >
            <thead className={classNames("table-dark", styles.tableHead)}>
              <tr>
                <th scope="col" className={styles.th}>
                  Accessory
                </th>
                <th scope="col" className={styles.th}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(variants).map(([key, variant]) => (
                <tr key={key} className={styles.tr}>
                  <td className={classNames("fw-semibold", styles.td)}>
                    {variant.title}
                  </td>
                  <td className={styles.td}>{variant.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AccessoriesPage
