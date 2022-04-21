import React, { Component } from "react"
import emailjs from "@emailjs/browser"
import { EMAILJS_USER } from "../../config/keys"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
  }

  sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm("service_998jv3x", "template_gkvwqkc", e.target).then(
      result => {
        document.querySelector("#success-message").innerHTML =
          "Thanks!  We will reply to your message within 24 hours."
        document.getElementById("form").reset()
      },
      error => {
        document.querySelector("#error-message").innerHTML =
          "A problem was incurred sending your message.  Please try again later."
        document.getElementById("form").reset()
      }
    )
  }

  componentDidMount() {
    emailjs.init(EMAILJS_USER)
  }

  render() {
    return (
      <div>
        <div className="contact-form">
          <form
            id="form"
            onSubmit={this.sendEmail}
            style={{ marginTop: "3.5rem", marginBottom: "1rem" }}
          >
            <h3>Contact Martin</h3>
            <div className="form-group">
              <label id="name-label" htmlFor="name">
                Name
              </label>
              <input
                name="from_name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter full name"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="form-group">
              <label id="email-label" htmlFor="email">
                Email address
              </label>
              <input
                name="reply_to"
                type="email"
                className="form-control"
                id="email"
                placeholder="e.g. fred@flintstones.com"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comments">Message</label>
              <textarea
                name="message"
                className="form-control"
                id="comments"
                placeholder="Your message here"
                style={{ width: "90%", height: "12rem", margin: "1rem auto" }}
                required
              />
            </div>
            <input
              id="submit"
              type="submit"
              className="btn btn-primary"
              style={{ height: "3rem", marginBottom: "2rem" }}
            />
          </form>
        </div>
        <div
          style={{
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id="success-message"></div>
          <div id="error-message" style={{ color: "red" }}></div>
        </div>
      </div>
    )
  }
}

export default ContactForm
