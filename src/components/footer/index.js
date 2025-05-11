import React from "react"
import classNames from "classnames"
import * as styles from "./styles.module.scss"
import MobileFooterLogo from "../../images/Energypsp.png"

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className=" container-xxl d-flex justify-content-center justify-content-sm-between align-items-center flex-column flex-md-row">
        <img
          src={MobileFooterLogo}
          alt="Logo"
          className={classNames("d-none d-md-block", styles.logo)}
        />
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-end mt-4 mt-md-0">
          <a
            className={classNames(
              styles.link,
              "btn btn-link text-decoration-none"
            )}
            href="/"
          >
            Terms of Service
          </a>
          <a
            className={classNames(
              styles.link,
              "btn btn-link text-decoration-none"
            )}
            href="/"
          >
            Privacy Policy
          </a>
          <span className={classNames(styles.copyRight, "mt-3 mt-md-0")}>
            (c) 2025 Energy PSP
          </span>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
