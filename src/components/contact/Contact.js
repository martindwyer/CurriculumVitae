import React, { Component } from "react"
import ContactForm from "./ContactForm"

class Contact extends Component {
  render() {
    return (
      <div>
        <div id="page-indicator">Contact</div>
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="page-top">
            <h1 className="animate__animated animate__zoomInDown">
              Contact&nbsp; <i class="bi bi-envelope"></i>
            </h1>
            <p className="animate__animated animate__zoomInDown">
              Going down that road...
            </p>
          </div>
        </div>

        <section id="contact" className="get-started container-fluid">
          <div id="contact-header">
            <p className="lh-lg">
              <i class="bi bi-chevron-double-right"></i>&nbsp;Explore custom
              solutions for your business needs today&nbsp;
              <i class="bi bi-chevron-double-left"></i>
            </p>
          </div>
          <div className="row">
            <div className="contact-container container">
              <div className="col-12 col-lg-6">
                <div className="cta-info w-100">
                  <h3 className="display-4">Next steps?</h3>
                  <p className="lh-lg" style={{ color: "black" }}>
                    We look forward to designing a custom solution to fit your
                    needs. Satisfaction guaranteed.
                  </p>
                  <ul className="cta-info__list">
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Send us a message
                      today.
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Give us an idea of
                      your strategic objectives.
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill"></i>Tell us about your
                      business needs.
                    </li>
                  </ul>
                  <p className="lh-lg" style={{ color: "black" }}>
                    We will contact you within 24 hours with a range of
                    alternatives.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact
