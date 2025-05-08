import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import * as styles from "./styles.module.scss"

const CallToAction = ({ title, buttonText, link }) => {
  return (
    <div className={classNames("text-center p-5 mt-5", styles.ctaBox)}>
      <h4 className={styles.ctaTitle}>{title}</h4>
      <Link to={link} className="btn btn-primary px-4">
        {buttonText}
      </Link>
    </div>
  )
}

CallToAction.defaultProps = {
  title: "Need a custom pipe solution?",
  buttonText: "Contact Our Sales Team",
  link: "/contact-us",
}

export default CallToAction
