// src/pages/products/gasket.js
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import gasketData from "../../productsdata/gasketData"
import Sidebar from "../../components/sidebar"
import CallToAction from "../../components/calltoaction"
import classNames from "classnames"
import * as pageStyles from "../../components/gasket/styles.module.scss"
import * as tabStyles from "../../components/ProductTabs/styles.module.scss"

const GasketPage = () => {
  const { summary, variants } = gasketData

  return (
    <Layout>
      <div className="container py-5">
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          {/* Sidebar vertically centered on larger screens */}
          <div className="d-none d-lg-flex flex-column justify-content-center me-4">
            <Sidebar />
          </div>

          {/* Main content area */}
          <main className="flex-grow-1 p-4">
            {/* Summary styled like ProductTabs */}
            <div className={tabStyles.summaryBox}>
              <h1>{summary.title}, Nuts & Bolts</h1>
              <p>{summary.description}</p>
            </div>

            {/* Table of variants */}
            <div
              className={classNames(
                "table-responsive",
                pageStyles.tableWrapper
              )}
            >
              <table
                className={classNames("table table-bordered", pageStyles.table)}
              >
                <thead
                  className={classNames("table-dark", pageStyles.tableHead)}
                >
                  <tr>
                    <th scope="col" className={pageStyles.th}>
                      Variant
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
              <CallToAction title="Need custom gaskets or hardware solutions?" />
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo
    title="Gaskets, Nuts & Bolts"
    description="Explore EnergyPSP's industrial gasket solutions including high-temp, rubber, and non-asbestos gaskets, along with reliable nuts and bolts for secure flange sealing."
    pathname={location.pathname}
  />
)

export default GasketPage
