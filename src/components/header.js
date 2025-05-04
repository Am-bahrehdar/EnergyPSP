import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "../components/styles.module.scss"
import classNames from "classnames"
import Logo from "../images/Energypsp.png"
import HamburgerIcon from "../images/SVG/white-hamburger.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={classNames("navbar navbar-expand-lg px-3", styles.hstyle)}
    >
      <div className={classNames("container-fluid", styles.navitem)}>
        {/* Left Logo */}
        <Link
          className="navbar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <img
            src={Logo}
            className={classNames("d-inline-block px-md-5", styles.logo)}
            alt="Logo"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          className={classNames(
            "navbar-toggler text-white border-0 mt-2 p-0 mx-4",
            styles.customtoggler
          )}
          type="button"
          onClick={toggleMenu}
        >
          <img
            src={HamburgerIcon}
            alt="Menu"
            style={{ width: "30px", height: "30px" }}
          />
        </button>

        {/* Right Nav */}
        <div
          className={classNames("collapse navbar-collapse", { show: isOpen })}
        >
          <ul className="nav nav-pills ms-auto d-flex flex-lg-row flex-column gap-2 gap-lg-2 align-items-lg-center mt-3 mt-lg-0  mx-4">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-light btn p-0 border-0 bg-transparent"
                data-bs-toggle="dropdown"
                type="button"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/Products/fittings/">
                    Fitting
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Products/pipe-tube/">
                    Pipe & Tube
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Products/plate-profile/">
                    Plate & Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Products/flanges/">
                    Flanges
                  </Link>
                </li>
                <li>
                  <li>
                    <Link className="dropdown-item" to="/Products/accessories/">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Products/gasket/">
                      Gasket
                    </Link>
                  </li>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
