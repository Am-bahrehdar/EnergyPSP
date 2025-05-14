// src/pages/using-ssr.js
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Logo from "../images/Energypsp.png"

const UsingSSR = ({ serverData }) => (
  <Layout>
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <img
        src={Logo}
        alt="EnergyPSP logo"
        style={{ width: 150, marginBottom: "1rem" }}
      />
      <h1>
        This page is <b>Server-Side Rendered</b>
      </h1>
    </div>

    <p>
      Welcome to <strong>Energy Piping Service Provider (EPSP)</strong>. We
      specialize in supplying high-quality industrial piping solutions,
      including:
    </p>

    <ul>
      {serverData.offers.map((offer, i) => (
        <li key={i}>{offer}</li>
      ))}
    </ul>

    <p>
      For more information or to request a quote, email us at{" "}
      <a href="mailto:info@energypsp.com">info@energypsp.com</a> or call{" "}
      <a href="tel:+1234567890">(123) 456-7890</a>.
    </p>

    <Link to="/">← Back to Home</Link>
  </Layout>
)

export const Head = () => <Seo title="EnergyPSP – Dynamic Offers (SSR)" />

export default UsingSSR

export async function getServerData() {
  try {
    // TODO: replace this static list with your real API endpoint
    const offers = [
      "Carbon Steel Pipes & Fittings",
      "Stainless Steel Tubing",
      "Copper Piping Systems",
      "Forgings & Flanges",
      "Structural & Aerospace Extrusions",
    ]
    return {
      props: { offers },
      // Optionally set a short caching window:
      // headers: { "Cache-Control": "public, max-age=60" }
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: { offers: [] },
    }
  }
}
