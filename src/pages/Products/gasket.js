import React from "react"
import Seo from "../../components/seo"
import gasketData from "../../productsdata/gasketData"
import classNames from "classnames"
import * as styles from "../../components/gasket/styles.module.scss"

const GasketPage = () => {
  const { summary, variants } = gasketData

  return (
    <>
      <Seo
        title="Gaskets, Nuts & Bolts"
        description="Explore EnergyPSP's industrial gasket solutions including high-temp, rubber, and non-asbestos gaskets, along with reliable nuts and bolts for secure flange sealing."
      />

      <div className={classNames("container", "py-5", styles.gasketPage)}>
        <h1 className={classNames("fw-bold", "mb-4", styles.pageTitle)}>
          {summary.title}, Nuts & Bolts
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
                  Variant
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

export default GasketPage
