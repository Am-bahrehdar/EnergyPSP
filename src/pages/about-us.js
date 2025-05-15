// src/pages/about.js
import * as React from "react"

import Seo from "../components/seo"
import classNames from "classnames"
import * as styles from "../components/about/styles.module.scss"

const AboutUs = () => (
  <div className={classNames("container", styles.aboutUsPage)}>
    <h1 className={styles.pageTitle}>About Us</h1>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Story</h2>
      <p className={styles.text}>
        Welcome to EnergyPSP — Energy Piping Service Provider. Based in Toronto,
        Ontario, we are proudly Canadian-owned and specialize in high-quality
        piping solutions for industries across North America.
      </p>
      <p className={styles.text}>
        Our expert engineering team delivers premium products including pipes,
        tubes, fittings, flanges, hangers, fasteners, and bolts. We offer
        integrated solutions that boost efficiency and reduce costs — making us
        the go-to partner in construction, manufacturing, and more.
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Why Choose EnergyPSP?</h2>
      <ul className={styles.list}>
        <li>
          <span className={styles.highlight}>Comprehensive Product Range:</span>{" "}
          Sourced from trusted manufacturers, our inventory covers pipes, tubes,
          fittings, flanges, hangers, fasteners, and bolts in various materials
          and grades.
        </li>
        <li>
          <span className={styles.highlight}>Efficiency-Driven Solutions:</span>{" "}
          Our offerings are tailored to client needs and built to reduce overall
          procurement costs.
        </li>
        <li>
          <span className={styles.highlight}>Industry Expertise:</span> Our
          knowledgeable team provides expert guidance to tackle complex project
          challenges.
        </li>
        <li>
          <span className={styles.highlight}>Customer-Centric Service:</span>{" "}
          We’re committed to personalized support — from selection to delivery.
        </li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Our Values</h2>
      <ul className={styles.list}>
        <li>
          <span className={styles.highlight}>Integrity:</span> We operate with
          honesty and transparency to earn your trust.
        </li>
        <li>
          <span className={styles.highlight}>Excellence:</span> We continually
          improve to deliver superior products and service.
        </li>
        <li>
          <span className={styles.highlight}>Commitment:</span> Your
          satisfaction drives everything we do.
        </li>
      </ul>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      <p className={styles.text}>
        Our skilled professionals bring deep industry knowledge and a passion
        for piping solutions. From technical advice to responsive support, our
        team is here to help your projects succeed.
      </p>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <p className={styles.text}>
        Learn how EnergyPSP can deliver premium piping products and
        cost-effective solutions. Contact us today for more information or to
        request a customized quote. We look forward to working with you.
      </p>
    </section>
  </div>
)

export const Head = ({ location }) => (
  <Seo
    title="About Us"
    description="Learn about EnergyPSP, a Canadian-owned piping solution provider offering premium products, expert engineering, and efficiency-driven services across North America."
    pathname={location.pathname}
  />
)

export default AboutUs
