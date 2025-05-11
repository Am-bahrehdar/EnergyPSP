import React from "react"
import Seo from "../../components/seo"
import accessoriesData from "../../productsdata/accessoriesData"
import Sidebar from "../../components/sidebar"
import CallToAction from "../../components/calltoaction"
import classNames from "classnames"
import * as pageStyles from "../../components/accessories/styles.module.scss"
import * as tabStyles from "../../components/ProductTabs/styles.module.scss"

const AccessoriesPage = () => {
  const { summary, variants } = accessoriesData

  return (
    <div className="container py-5">
      {/* SEO metadata */}
      <Seo
        title="Accessories"
        description="Discover EnergyPSP's high-quality pipe accessories including backing rings, suction diffusers, supports, and sealants — essential for safe and stable pipeline systems."
      />

      {/* Layout: sidebar and main content split */}
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        {/* Sidebar vertically centered */}
        <div className="d-flex flex-column justify-content-center me-4">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-grow-1 p-4">
          {/* Summary styled like ProductTabs */}
          <div className={tabStyles.summaryBox}>
            <h1>{summary.title}</h1>
            <p>{summary.description}</p>
          </div>

          {/* Table of accessories */}
          <div
            className={classNames("table-responsive", pageStyles.tableWrapper)}
          >
            <table
              className={classNames("table table-bordered", pageStyles.table)}
            >
              <thead className={classNames("table-dark", pageStyles.tableHead)}>
                <tr>
                  <th scope="col" className={pageStyles.th}>
                    Accessory
                  </th>
                  <th scope="col" className={pageStyles.th}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(variants).map(([key, variant]) => (
                  <tr key={key} className={pageStyles.tr}>
                    <td className={classNames("fw-semibold", pageStyles.td)}>
                      {variant.title}
                    </td>
                    <td className={pageStyles.td}>{variant.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to action below the table */}
          <div className="mt-4">
            <CallToAction title="Looking for pipe accessory solutions tailored to your project?" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AccessoriesPage
