import React from "react"
import { Link } from "gatsby"
import Logo from "../images/Energypsp.png"
import * as styles from "../components/404/styles.module.scss"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <main className={styles.container}>
    <img src={Logo} alt="EnergyPSP logo" className={styles.logo} />
    <h1 className={styles.title}>404</h1>
    <p className={styles.description}>
      Oops! The page you’re looking for can’t be found.
    </p>
    <Link to="/" className={styles.homeLink}>
      Take me home
    </Link>
  </main>
)
export const Head = () => (
  <Seo
    title="404: Page Not Found"
    description="The page you are looking for does not exist."
    pathname="/404/"
  />
)
export default NotFoundPage
