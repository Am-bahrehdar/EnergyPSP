import * as React from "react"
import classNames from "classnames"
import { Phone, Mail } from "lucide-react" // lightweight icons
import * as styles from "../components/ContactUs/styles.module.scss"
import Seo from "../components/seo" // SEO component

const ContactUsPage = () => {
  return (
    <>
      {/* SEO for Contact Page */}
      <Seo
        title="Contact Us"
        description="Get in touch with EnergyPSP for high-quality piping solutions across North America. Visit our Toronto head office, call, or email our sales team."
      />

      <div className={classNames("container py-5", styles.pageWrapper)}>
        <h1 className={classNames("general-sections-title mb-5")}>
          Contact Us
        </h1>

        <div className="row g-5">
          {/* Map Section */}
          <div className="col-12 col-lg-6">
            <div className={styles.mapContainer}>
              <iframe
                title="Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3885050345296!2d-79.5326921845015!3d43.648515779121204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d8937df1baf%3A0x2e2d08d4c5022b51!2s3250%20Bloor%20St%20W%20%23600%2C%20Etobicoke%2C%20ON%20M8X%202X9%2C%20Canada!5e0!3m2!1sen!2sca!4v1714335636235!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <div className={styles.contactInfo}>
              <h3 className="fw-bold mb-4">HEAD OFFICE</h3>
              <p className="mb-2">
                3250 Bloor Street West
                <br />
                Tower, Suite 600,
                <br />
                Toronto, ON
                <br />
                M8X 2X9
              </p>

              <div className="mt-4">
                <div
                  className={classNames(
                    "d-flex align-items-center mb-2",
                    styles.iconRow
                  )}
                >
                  <Phone
                    size={20}
                    className={classNames("me-2", styles.icon)}
                  />
                  <strong>Phone:</strong>
                </div>
                <p className="mb-1 ms-4">(+1)-437-500-5403</p>
                <p className="mb-0 ms-4">(+1)-647-358-1047</p>
              </div>

              <div className="mt-4">
                <div
                  className={classNames(
                    "d-flex align-items-center mb-2",
                    styles.iconRow
                  )}
                >
                  <Mail size={20} className={classNames("me-2", styles.icon)} />
                  <strong>Email:</strong>
                </div>
                <p className="ms-4">
                  <a
                    href="mailto:sales@energypsp.com"
                    className={styles.emailLink}
                  >
                    sales@energypsp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsPage
